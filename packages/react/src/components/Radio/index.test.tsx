import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from '.';

test.afterEach(cleanup);

const defaultLabel = 'Radio';

test('the radio `<input>` is labelled by its `<label>`', async (t) => {
	render(<Radio>{defaultLabel}</Radio>);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	t.is(input.tagName.toLowerCase(), 'input');
	t.is(input.type.toLowerCase(), 'radio');
});

test('a radio can be checked but not unchecked by clicking the label', async (t) => {
	const user = userEvent.setup();

	render(<Radio>{defaultLabel}</Radio>);
	const label = screen.getByText(defaultLabel);
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(label);
	t.is(input.checked, true);
	await user.click(label);
	t.is(input.checked, true);
});

test('a radio can be checked but not unchecked by clicking the control', async (t) => {
	const user = userEvent.setup();

	render(<Radio>{defaultLabel}</Radio>);
	// this control is purely an affordance for sighted mouse users and is not
	// rendered in the a11y tree so testing-library selectors can't reach it
	const control = document.querySelector('.nds-field__control') as Element;
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(control);
	t.is(input.checked, true);
	await user.click(control);
	t.is(input.checked, true);
});

test('a radio can be checked but not unchecked by clicking the thumbnail', async (t) => {
	const user = userEvent.setup();

	render(<Radio thumbnail={<img src="https://picsum.photos/64" alt="" />}>{defaultLabel}</Radio>);
	const thumbnail = screen.getByRole('img');
	const input = screen.getByLabelText(defaultLabel) as HTMLInputElement;
	await user.click(thumbnail);
	t.is(input.checked, true);
	await user.click(thumbnail);
	t.is(input.checked, true);
});

test('a required radio renders its required indicator as part of the label', async (t) => {
	render(
		<Radio required requiredIndicator>
			{defaultLabel}
		</Radio>,
	);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(required)');
	t.true(label.contains(indicator));
});

test('an optional radio renders its optional indicator as part of the label', async (t) => {
	render(<Radio optionalIndicator>{defaultLabel}</Radio>);
	const label = screen.getByText(defaultLabel);
	const indicator = screen.getByText('(optional)');
	t.true(label.contains(indicator));
});

test('a `RadioGroup` is rendered as a group of radios with an accessible group name', async (t) => {
	const groupLabel = 'Radio group';
	const groupChoiceLabels = ['A', 'B'];
	const groupChoices = groupChoiceLabels.map((l) => <Radio key={l}>{l}</Radio>);
	render(<RadioGroup label={groupLabel}>{groupChoices}</RadioGroup>);
	t.truthy(screen.getByRole('group', { name: groupLabel }));
	const inputs = screen.getAllByLabelText((text) =>
		groupChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(inputs.every((el) => el.type === 'radio'));
});
