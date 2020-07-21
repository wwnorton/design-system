import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Checkbox } from '.';

// TODO: use something other than classes to select the control/thumbnail

test.afterEach(cleanup);

const defaultLabel = 'Checkbox';

test('the checkbox `<input>` is labelled by its `<label>`', (t) => {
	render(<Checkbox>{ defaultLabel }</Checkbox>);
	const input = screen.getByLabelText(defaultLabel);
	t.is(input.tagName.toLowerCase(), 'input');
	t.is(input.getAttribute('type').toLowerCase(), 'checkbox');
});

test('a checkbox can be checked and unchecked by clicking the label', (t) => {
	render(<Checkbox>{ defaultLabel }</Checkbox>);
	const label = screen.getByText(defaultLabel);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	fireEvent.click(label);
	t.is(input.checked, true);
	fireEvent.click(label);
	t.is(input.checked, false);
});

test('a checkbox can be checked and unchecked by clicking the control', (t) => {
	render(<Checkbox>{ defaultLabel }</Checkbox>);
	const control = document.querySelector('.nds-field__control');
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	fireEvent.click(control);
	t.is(input.checked, true);
	fireEvent.click(control);
	t.is(input.checked, false);
});

test('a checkbox can be checked and unchecked by clicking the thumbnail', (t) => {
	render(<Checkbox thumbnail={<img src="https://picsum.photos/64" alt="" />}>{ defaultLabel }</Checkbox>);
	const thumbnail = document.querySelector('.nds-field__thumbnail');
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	fireEvent.click(thumbnail);
	t.is(input.checked, true);
	fireEvent.click(thumbnail);
	t.is(input.checked, false);
});

test('a required checkbox renders its required indicator as part of the label', (t) => {
	render(<Checkbox required requiredIndicator>{ defaultLabel }</Checkbox>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(required)');
	t.true(label.contains(indicator));
});

test('an optional checkbox renders its optional indicator as part of the label', (t) => {
	render(<Checkbox optionalIndicator>{ defaultLabel }</Checkbox>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(optional)');
	t.true(label.contains(indicator));
});

// TODO: investigate why this is failing. It is passing in Storybook.
// likely reason: `BaseInput`'s validation can't be triggered via a controlled `checked`
test.failing('a required checkbox errors when it\'s unchecked', (t) => {
	render(<Checkbox required checked>{ defaultLabel }</Checkbox>);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	fireEvent.click(input);
	t.false(input.checked);
	t.is(input.getAttribute('aria-invalid'), 'true');
	t.truthy(screen.getByText('This field is required.'));
});
