import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox, CheckboxGroup } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Checkbox';

test('the checkbox `<input>` is labelled by its `<label>`', async (t) => {
	render(<Checkbox>{defaultLabel}</Checkbox>);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	t.is(input.tagName.toLowerCase(), 'input');
	t.is(input.type.toLowerCase(), 'checkbox');
});

test('a checkbox can be checked and unchecked by clicking the label', async (t) => {
	const user = userEvent.setup();

	render(<Checkbox>{defaultLabel}</Checkbox>);
	const label = screen.getByText(defaultLabel);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(label);
	t.is(input.checked, true);
	await user.click(label);
	t.is(input.checked, false);
});

test('a checkbox can be checked and unchecked by clicking the control', async (t) => {
	const user = userEvent.setup();

	render(<Checkbox>{defaultLabel}</Checkbox>);
	// this control is purely an affordance for sighted mouse users and is not
	// rendered in the a11y tree so testing-library selectors can't reach it
	const control = document.querySelector('.nds-field__control') as Element;
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(control);
	t.is(input.checked, true);
	await user.click(control);
	t.is(input.checked, false);
});

test('a checkbox can be checked and unchecked by clicking the thumbnail', async (t) => {
	const user = userEvent.setup();

	render(
		<Checkbox thumbnail={<img src="https://picsum.photos/64" alt="" />}>{defaultLabel}</Checkbox>,
	);
	const thumbnail = screen.getByRole('img');
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(thumbnail);
	t.is(input.checked, true);
	await user.click(thumbnail);
	t.is(input.checked, false);
});

test('a required checkbox renders its required indicator as part of the label', async (t) => {
	render(
		<Checkbox required requiredIndicator>
			{defaultLabel}
		</Checkbox>,
	);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(required)');
	t.true(label.contains(indicator));
});

test('an optional checkbox renders its optional indicator as part of the label', async (t) => {
	render(<Checkbox optionalIndicator>{defaultLabel}</Checkbox>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(optional)');
	t.true(label.contains(indicator));
});

test("a required checkbox errors when it's unchecked", async (t) => {
	const user = userEvent.setup();

	render(
		<Checkbox required checked>
			{defaultLabel}
		</Checkbox>,
	);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(input);
	t.false(input.checked);
	t.is(input.getAttribute('aria-invalid'), 'true');
	t.truthy(screen.getByText('This field is required.'));
});

test('a `CheckboxGroup` is rendered as a group of checkboxes with an accessible group name', async (t) => {
	const groupLabel = 'Checkbox group';
	const groupChoiceLabels = ['A', 'B'];
	const groupChoices = groupChoiceLabels.map((l) => <Checkbox key={l}>{l}</Checkbox>);
	render(<CheckboxGroup label={groupLabel}>{groupChoices}</CheckboxGroup>);
	t.truthy(screen.getByRole('group', { name: groupLabel }));
	const inputs = screen.getAllByLabelText((text) =>
		groupChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(inputs.every((el) => el.type === 'checkbox'));
});
