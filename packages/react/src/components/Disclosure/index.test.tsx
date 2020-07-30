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

test.failing('clicking the summary opens a closed disclosure', async (t) => {
	render(<Disclosure summary={defaultSummary}>{ shortContent }</Disclosure>);
	const details = screen.getByRole('group') as HTMLDetailsElement;
	const summary = screen.getByText(defaultSummary);
	fireEvent.click(summary);
	t.is(details.open, true);
});

test.failing('clicking the summary closes an open disclosure', async (t) => {
	render(<Disclosure summary={defaultSummary} open>{ shortContent }</Disclosure>);
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
