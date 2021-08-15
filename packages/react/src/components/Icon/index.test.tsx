import test from 'ava';
import React from 'react';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Icon } from '.';

test.afterEach(cleanup);

test('contents are used for the icon\'s accessible name', (t) => {
	const contents = 'foo bar';
	render(<Icon variant="account">{ contents }</Icon>);
	t.is(screen.getByLabelText(contents), screen.getByRole('img'));
});

test('contents are included in a tooltip when hovered', async (t) => {
	const contents = 'foo bar';
	render(<Icon variant="account">{ contents }</Icon>);
	const icon = screen.getByRole('img');
	userEvent.hover(icon);
	const tooltip = await screen.findByRole('tooltip', { hidden: true });
	t.truthy(tooltip);
});

test('icons are focusable when they have contents', (t) => {
	const contents = 'foo bar';
	render(<Icon variant="account">{ contents }</Icon>);
	const icon = screen.getByRole('img');
	t.true(icon.hasAttribute('tabindex'));
});

test('click listeners cannot be attached to icons', (t) => {
	/* eslint-disable no-console */
	const { warn } = console;
	console.warn = () => true;
	let clicked = false;
	render(<Icon variant="account" onClick={() => { clicked = true; }} />);
	const icon = screen.getByRole('img', { hidden: true });
	userEvent.click(icon);
	t.false(clicked);
	console.warn = warn;
	/* eslint-enable no-console */
});
