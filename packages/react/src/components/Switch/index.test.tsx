import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Switch } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Switch label';

test('the switch is named by its label', (t) => {
	render(<Switch label={defaultLabel} />);
	t.truthy(screen.getByRole('switch', { name: defaultLabel }));
});

test('clicking a switch toggles its state', (t) => {
	render(<Switch label={defaultLabel} />);
	const control = screen.getByRole('switch', { name: defaultLabel });
	t.is(control.getAttribute('aria-checked'), 'false');
	fireEvent.click(control);
	t.is(control.getAttribute('aria-checked'), 'true');
});

test('clicking a switch\'s label toggles its checked state', (t) => {
	render(<Switch label={defaultLabel} />);
	const control = screen.getByRole('switch', { name: defaultLabel });
	const label = screen.getByText(defaultLabel);
	t.is(control.getAttribute('aria-checked'), 'false');
	fireEvent.click(label);
	t.is(control.getAttribute('aria-checked'), 'true');
});

test('a tooltipped switch has an accessible name before and after the tooltip is rendered', (t) => {
	render(<Switch label={defaultLabel} tipped />);
	const control = screen.getByRole('switch', { name: defaultLabel });
	t.truthy(control);
	t.falsy(screen.queryByText(defaultLabel));
	fireEvent.pointerEnter(control);
	t.is(
		screen.getByRole('tooltip', { hidden: true }).textContent,
		defaultLabel,
	);
});
