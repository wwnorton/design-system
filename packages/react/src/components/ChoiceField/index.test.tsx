import test from 'ava';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChoiceField, Choice, Choices } from '.';

// TODO: use something other than classes to select the control/thumbnail

test.afterEach(cleanup);

const defaultLabel = 'ChoiceField';
const defaultChoiceLabels = ['Apple', 'Banana', 'Green Bean', 'Tomato'];
const defaultChoices = defaultChoiceLabels.map((v) => <Choice key={v}>{v}</Choice>);

// https://w3c.github.io/html-aam/#fieldset-and-legend-elements
test('the rendered fieldset is labelled by the `label` prop', (t) => {
	render(<ChoiceField label={defaultLabel}>{defaultChoices}</ChoiceField>);
	t.truthy(screen.getByRole('group', { name: defaultLabel }));
});

test('renders radio buttons by default', (t) => {
	render(<ChoiceField label={defaultLabel}>{defaultChoices}</ChoiceField>);
	const choices = screen.getAllByLabelText((text) =>
		defaultChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(choices.every((choice) => choice.type === 'radio'));
});

test('renders checkboxes when `multiple` is `true`', (t) => {
	render(
		<ChoiceField multiple label={defaultLabel}>
			{defaultChoices}
		</ChoiceField>,
	);
	const choices = screen.getAllByLabelText((text) =>
		defaultChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(choices.every((choice) => choice.type === 'checkbox'));
});

test('the `ChoiceField` name overrides `Choice` names', (t) => {
	const name = 'foo';
	render(
		<ChoiceField label={defaultLabel} name={name}>
			{defaultChoiceLabels.map((v) => (
				<Choice key={v} name={v}>
					{v}
				</Choice>
			))}
		</ChoiceField>,
	);
	const choices = screen.getAllByLabelText((text) =>
		defaultChoiceLabels.includes(text),
	) as HTMLInputElement[];
	t.true(choices.every((choice) => choice.name === name));
});

test('unnamed choices are still grouped by a name', (t) => {
	render(<ChoiceField label={defaultLabel}>{defaultChoices}</ChoiceField>);
	const choices = screen.getAllByLabelText((text) =>
		defaultChoiceLabels.includes(text),
	) as HTMLInputElement[];
	const firstName = choices[0].name;
	t.true(choices.every((choice) => choice.name === firstName));
});

test('selected choices are rendered as checked fields', (t) => {
	const SELECTED_CHOICE = defaultChoiceLabels[1];
	render(
		<ChoiceField label={defaultLabel}>
			<Choices choices={defaultChoiceLabels} selected={SELECTED_CHOICE} />
		</ChoiceField>,
	);
	const input = screen.getByLabelText(SELECTED_CHOICE) as HTMLInputElement;
	t.true(input.checked);
});

test('when the value is not explicitly provided, the label is used for choice values', (t) => {
	render(
		<ChoiceField label={defaultLabel}>
			<Choices choices={defaultChoiceLabels} />
		</ChoiceField>,
	);
	defaultChoiceLabels.forEach((label) => {
		const input = screen.getByLabelText(label) as HTMLInputElement;
		t.is(input.value, label);
	});
});

test('when the label is not explicitly provided, the value is used for choice labels', (t) => {
	render(
		<ChoiceField label={defaultLabel}>
			<Choice value="A" />
			<Choice value="B" />
			<Choice value="C" />
		</ChoiceField>,
	);
	t.truthy(screen.getByLabelText('A'));
	t.truthy(screen.getByLabelText('B'));
	t.truthy(screen.getByLabelText('C'));
});

test('`ChoiceField` controls the checked state of radio choices', async (t) => {
	const user = userEvent.setup();

	render(<ChoiceField label={defaultLabel}>{defaultChoices}</ChoiceField>);

	const [apple, banana, greenBean, tomato] = defaultChoiceLabels.map(
		(label) => screen.getByLabelText(label) as HTMLInputElement,
	);

	t.false(apple.checked);
	t.false(banana.checked);
	t.false(greenBean.checked);
	t.false(tomato.checked);

	await user.click(banana);
	t.false(apple.checked);
	t.true(banana.checked);
	t.false(greenBean.checked);
	t.false(tomato.checked);

	await user.click(tomato);
	t.false(apple.checked);
	t.false(banana.checked);
	t.false(greenBean.checked);
	t.true(tomato.checked);
});

test('`ChoiceField` controls the checked state of checkbox choices', async (t) => {
	const user = userEvent.setup();

	render(
		<ChoiceField multiple label={defaultLabel}>
			{defaultChoices}
		</ChoiceField>,
	);

	const [apple, banana, greenBean, tomato] = defaultChoiceLabels.map(
		(label) => screen.getByLabelText(label) as HTMLInputElement,
	);

	await user.click(apple);
	await user.click(banana);
	t.true(apple.checked);
	t.true(banana.checked);
	t.false(greenBean.checked);
	t.false(tomato.checked);

	await user.click(apple);
	t.false(apple.checked);
	t.true(banana.checked);
});

test('choice objects are rendered as choices', (t) => {
	const choiceObjects = defaultChoiceLabels.map((label, i) => ({
		children: label,
		value: `item-${i}`,
	}));
	render(
		<ChoiceField label={defaultLabel}>
			<Choices choices={choiceObjects} />
		</ChoiceField>,
	);
	defaultChoiceLabels.forEach((label) => {
		const input = screen.getByLabelText(label) as HTMLInputElement;
		t.not(input.value, label);
	});
});
