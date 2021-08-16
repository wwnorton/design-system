import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Disclosure } from '.';

test.afterEach(cleanup);

const defaultSummary = 'More information';
const shortContent = 'lorem ipsum';

// TODO: investigate why a timeout is necessary to test for the `open` attribute

// a potential reason:
// https://github.com/facebook/react/issues/15486#issuecomment-873516817

test('clicking the summary opens a closed disclosure', async (t) => {
	render(<Disclosure summary={defaultSummary}>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.false(details.hasAttribute('open'));

	// summary should have an implicit role of "button" but this isn't found, so
	// we hack it with a .querySelector
	// https://www.w3.org/TR/html-aria/#el-summary
	// const summary = screen.getByRole('button', { name: defaultSummary });
	const summary = details.querySelector('summary');
	userEvent.click(summary);

	await new Promise((resolve) => {
		window.setTimeout(() => {
			resolve(t.true(details.hasAttribute('open')));
		}, 5);
	});
});

test('clicking the summary closes an open disclosure', async (t) => {
	render(<Disclosure summary={defaultSummary} isOpen>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.true(details.hasAttribute('open'));

	const summary = details.querySelector('summary');
	userEvent.click(summary);

	await new Promise((resolve) => {
		window.setTimeout(() => {
			resolve(t.false(details.hasAttribute('open')));
		}, 5);
	});
});

test('returning false on a callback cancels the callback', (t) => {
	render((
		<Disclosure summary={defaultSummary} onOpenStart={() => false}>
			{ shortContent }
		</Disclosure>
	));
	const summary = screen.getByText(defaultSummary);
	fireEvent.click(summary);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.is(details.open, false);
});

test('the default marker is a caret pointing right', (t) => {
	render(<Disclosure summary={defaultSummary}>{ shortContent }</Disclosure>);
	const icon = screen.getByRole('img', { hidden: true }) as unknown as SVGSVGElement;
	t.true(icon.className.baseVal.includes('caret-right'));
});

test('the default marker when in `panel` mode is a chevron pointing down', (t) => {
	render(<Disclosure panel summary={defaultSummary}>{ shortContent }</Disclosure>);
	const icon = screen.getByRole('img', { hidden: true }) as unknown as SVGSVGElement;
	t.true(icon.className.baseVal.includes('chevron-down'));
});

test('setting reduced motion results in a `reduced-motion` class being set', (t) => {
	render(<Disclosure reducedMotion summary={defaultSummary}>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	t.true(details.className.includes('reduced-motion'));
});

test('setting a null marker results in no marker being rendered', (t) => {
	render(<Disclosure marker={null} summary={defaultSummary}>{ shortContent }</Disclosure>);
	t.falsy(screen.queryByRole('img', { hidden: true }));
});
