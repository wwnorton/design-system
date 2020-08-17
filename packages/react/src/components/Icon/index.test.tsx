import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Icon } from '.';

test.afterEach(cleanup);

test('contents are used for the icon\'s accessible name', (t) => {
	const contents = 'foo bar';
	render(<Icon variant="account">{ contents }</Icon>);
	t.is(screen.getByLabelText(contents), screen.getByRole('img'));
});

test('contents are included in a tooltip when hovered', (t) => {
	const contents = 'foo bar';
	render(<Icon variant="account">{ contents }</Icon>);
	const icon = screen.getByRole('img');
	fireEvent.pointerEnter(icon);
	const tooltip = screen.getByRole('tooltip', { hidden: true });
	t.truthy(tooltip);
	t.is(tooltip.textContent, contents);
	t.is(icon.getAttribute('aria-labelledby'), tooltip.id);
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
	fireEvent.click(icon);
	t.false(clicked);
	console.warn = warn;
	/* eslint-enable no-console */
});
