import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Disclosure } from '.';

test.afterEach(cleanup);

const defaultSummary = 'More information';
const shortContent = 'lorem ipsum';

// TODO: investigate why summary clicks don't work in this testing context. They
// do work in Storybook/real browsers.
// TODO: investigate testing tools with rendering engines since most disclosure
// features are visual/physical.

test.failing('clicking the summary opens a closed disclosure', (t) => {
	render(<Disclosure summary={defaultSummary}>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	const summary = screen.getByText(defaultSummary);
	fireEvent.click(summary);
	t.is(details.open, true);
});

test.failing('clicking the summary closes an open disclosure', (t) => {
	render(<Disclosure summary={defaultSummary} isOpen>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	const summary = screen.getByText(defaultSummary);
	fireEvent.click(summary);
	t.is(details.open, false);
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
