import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
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
