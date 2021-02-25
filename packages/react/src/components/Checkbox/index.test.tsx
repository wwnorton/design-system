import test from 'ava';
import React from 'react';
import {
	cleanup, render, fireEvent, screen,
} from '@testing-library/react';
import { Checkbox, CheckboxGroup } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Checkbox';

test.only('the checkbox `<input>` is labelled by its `<label>`', (t) => {
	render(<Checkbox>{ defaultLabel }</Checkbox>);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	t.is(input.tagName.toLowerCase(), 'input');
	t.is(input.type.toLowerCase(), 'checkbox');
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
	// this control is purely an affordance for sighted mouse users and is not
	// rendered in the a11y tree so testing-library selectors can't reach it
	const control = document.querySelector('.nds-field__control') as Element;
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	fireEvent.click(control);
	t.is(input.checked, true);
	fireEvent.click(control);
	t.is(input.checked, false);
});

test('a checkbox can be checked and unchecked by clicking the thumbnail', (t) => {
	render(<Checkbox thumbnail={<img src="https://picsum.photos/64" alt="" />}>{ defaultLabel }</Checkbox>);
	const thumbnail = screen.getByRole('img');
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

test('a `CheckboxGroup` is rendered as a group of checkboxes with an accessible group name', (t) => {
	const groupLabel = 'Checkbox group';
	const groupChoiceLabels = ['A', 'B'];
	const groupChoices = groupChoiceLabels.map((l) => <Checkbox key={l}>{ l }</Checkbox>);
	render(<CheckboxGroup label={groupLabel}>{ groupChoices }</CheckboxGroup>);
	t.truthy(screen.getByRole('group', { name: groupLabel }));
	const inputs = screen.getAllByLabelText(
		(text) => groupChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(inputs.every((el) => el.type === 'checkbox'));
});
