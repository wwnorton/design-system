import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Disclosure } from '.';

test.afterEach(cleanup);

const defaultSummary = 'More information';
const shortContent = 'lorem ipsum';

test('clicking the summary opens a closed disclosure', async (t) => {
	const user = userEvent.setup();

	render(<Disclosure summary={defaultSummary}>{shortContent}</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.false(details.hasAttribute('open'));

	// TODO: use a more semantic selector for all summary elements in this file.
	// Ideally we would getByRole, but summary elements don't have an implicit role.
	// See https://www.w3.org/TR/html-aria/#el-summary
	const summary = screen.getByText(defaultSummary);
	await user.click(summary);

	t.true(details.hasAttribute('open'));
});

test('clicking the summary closes an open disclosure', async (t) => {
	const user = userEvent.setup();

	render(
		<Disclosure summary={defaultSummary} isOpen>
			{shortContent}
		</Disclosure>,
	);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.true(details.hasAttribute('open'));

	const summary = screen.getByText(defaultSummary);
	await user.click(summary);

	t.false(details.hasAttribute('open'));
});

test('returning false on a callback cancels the callback', async (t) => {
	const user = userEvent.setup();

	render(
		<Disclosure summary={defaultSummary} onOpenStart={() => false}>
			{shortContent}
		</Disclosure>,
	);
	const summary = screen.getByText(defaultSummary);
	await user.click(summary);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.is(details.open, false);
});

test('the default marker is a caret pointing right', async (t) => {
	render(<Disclosure summary={defaultSummary}>{shortContent}</Disclosure>);
	const icon = screen.getByRole('img', { hidden: true }) as unknown as SVGSVGElement;
	t.true(icon.classList.contains('nds-icon--caret-right'));
});

test('the default marker when in `panel` mode is a chevron pointing down', async (t) => {
	render(
		<Disclosure panel summary={defaultSummary}>
			{shortContent}
		</Disclosure>,
	);
	const icon = screen.getByRole('img', { hidden: true }) as unknown as SVGSVGElement;
	t.true(icon.classList.contains('nds-icon--chevron-down'));
});

test('setting reduced motion results in a `reduced-motion` class being set', async (t) => {
	render(
		<Disclosure reducedMotion summary={defaultSummary}>
			{shortContent}
		</Disclosure>,
	);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.true(details.classList.contains('nds-reduced-motion'));
});

test('setting a null marker results in no marker being rendered', async (t) => {
	render(
		<Disclosure marker={null} summary={defaultSummary}>
			{shortContent}
		</Disclosure>,
	);
	t.falsy(screen.queryByRole('img', { hidden: true }));
});

test('onOpenEnd is called when reduced motion is set via props', async (t) => {
	const user = userEvent.setup();
	const onOpenEnd = sinon.spy();

	render(
		<Disclosure reducedMotion summary={defaultSummary} onOpenEnd={onOpenEnd}>
			{shortContent}
		</Disclosure>,
	);
	const summary = screen.getByText(defaultSummary);
	await user.click(summary);

	// With reduced motion there is no animation, so the end callback fires immediately.
	t.true(onOpenEnd.calledOnce);
});

test('onOpenEnd is called when no reduced motion is set', async (t) => {
	const user = userEvent.setup();
	const onOpenEnd = sinon.spy();

	// Force `shouldAnimate` to be true by reporting a non-zero transition duration,
	// so the disclosure animates and defers `onOpenEnd` until the transition ends.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0.3s',
				transitionDuration: '0.3s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure summary={defaultSummary} onOpenEnd={onOpenEnd}>
				{shortContent}
			</Disclosure>,
		);
		const summary = screen.getByText(defaultSummary);
		await user.click(summary);

		// The animation hasn't finished yet, so the callback should not have fired.
		t.true(onOpenEnd.notCalled);

		// Simulate the CSS transition completing.
		const contents = screen.getByRole('group').querySelector(`.nds-disclosure__contents-outer`);
		t.not(contents, null);
		fireEvent.transitionEnd(contents as Element);

		t.true(onOpenEnd.calledOnce);
	} finally {
		getComputedStyle.restore();
	}
});

test('onOpenEnd is called when the contents `transition-duration` is 0', async (t) => {
	const user = userEvent.setup();
	const onOpenEnd = sinon.spy();

	// Report a zero transition duration so `shouldAnimate` is false and the
	// component treats it like reduced motion, firing the callback immediately.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0s',
				transitionDuration: '0s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure summary={defaultSummary} onOpenEnd={onOpenEnd}>
				{shortContent}
			</Disclosure>,
		);
		const summary = screen.getByText(defaultSummary);
		await user.click(summary);

		t.true(onOpenEnd.calledOnce);
	} finally {
		getComputedStyle.restore();
	}
});

test('onCloseEnd is called when reduced motion is set via props', async (t) => {
	const user = userEvent.setup();
	const onCloseEnd = sinon.spy();

	render(
		<Disclosure reducedMotion isOpen summary={defaultSummary} onCloseEnd={onCloseEnd}>
			{shortContent}
		</Disclosure>,
	);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.true(details.hasAttribute('open'));

	const summary = screen.getByText(defaultSummary);
	await user.click(summary);

	// With reduced motion there is no animation, so the end callback fires immediately.
	t.true(onCloseEnd.calledOnce);
	t.false(details.hasAttribute('open'));
});

test('onCloseEnd is called when no reduced motion is set', async (t) => {
	const user = userEvent.setup();
	const onCloseEnd = sinon.spy();

	// Force `shouldAnimate` to be true by reporting a non-zero transition duration,
	// so the disclosure animates and defers `onCloseEnd` until the transition ends.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0.3s',
				transitionDuration: '0.3s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure isOpen summary={defaultSummary} onCloseEnd={onCloseEnd}>
				{shortContent}
			</Disclosure>,
		);
		const summary = screen.getByText(defaultSummary);
		await user.click(summary);

		// The animation hasn't finished yet, so the callback should not have fired.
		t.true(onCloseEnd.notCalled);

		// Simulate the CSS transition completing.
		const contents = screen.getByRole('group').querySelector(`.nds-disclosure__contents-outer`);
		t.not(contents, null);
		fireEvent.transitionEnd(contents as Element);

		t.true(onCloseEnd.calledOnce);
	} finally {
		getComputedStyle.restore();
	}
});

test('onCloseEnd is called when the contents `transition-duration` is 0', async (t) => {
	const user = userEvent.setup();
	const onCloseEnd = sinon.spy();

	// Report a zero transition duration so `shouldAnimate` is false and the
	// component treats it like reduced motion, firing the callback immediately.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0s',
				transitionDuration: '0s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure isOpen summary={defaultSummary} onCloseEnd={onCloseEnd}>
				{shortContent}
			</Disclosure>,
		);
		const details = screen.getByRole('group') as HTMLDetailsElement;
		const summary = screen.getByText(defaultSummary);
		await user.click(summary);

		t.true(onCloseEnd.calledOnce);
		t.false(details.hasAttribute('open'));
	} finally {
		getComputedStyle.restore();
	}
});

test('onOpenCancel is called when the summary is clicked while opening', async (t) => {
	const user = userEvent.setup();
	const onOpenCancel = sinon.spy();

	// Force `shouldAnimate` to be true by reporting a non-zero transition duration,
	// so the disclosure enters the `opening` state instead of opening instantly.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0.3s',
				transitionDuration: '0.3s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure summary={defaultSummary} onOpenCancel={onOpenCancel}>
				{shortContent}
			</Disclosure>,
		);

		const summary = screen.getByText(defaultSummary);

		// First click starts opening the disclosure (enters the `opening` state).
		await user.click(summary);
		t.true(onOpenCancel.notCalled);

		// Second click while still opening cancels the open animation.
		await user.click(summary);
		t.true(onOpenCancel.calledOnce);
	} finally {
		getComputedStyle.restore();
	}
});

test('onCloseCancel is called when the summary is clicked while closing', async (t) => {
	const user = userEvent.setup();
	const onCloseCancel = sinon.spy();

	// Force `shouldAnimate` to be true by reporting a non-zero transition duration,
	// so the disclosure enters the `closing` state instead of closing instantly.
	const getComputedStyle = sinon.stub(window, 'getComputedStyle').callsFake(
		() =>
			({
				getPropertyValue: () => '0.3s',
				transitionDuration: '0.3s',
			} as unknown as CSSStyleDeclaration),
	);

	try {
		render(
			<Disclosure isOpen summary={defaultSummary} onCloseCancel={onCloseCancel}>
				{shortContent}
			</Disclosure>,
		);

		const summary = screen.getByText(defaultSummary);

		// First click starts closing the disclosure (enters the `closing` state).
		await user.click(summary);
		t.true(onCloseCancel.notCalled);

		// Second click while still closing cancels the close animation.
		await user.click(summary);
		t.true(onCloseCancel.calledOnce);
	} finally {
		getComputedStyle.restore();
	}
});
