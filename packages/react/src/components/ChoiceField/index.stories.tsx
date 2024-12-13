import React from 'react';
import { action } from '@storybook/addon-actions';
import { ChoiceField, Choice, Choices, ChoiceFieldProps, ChoicesProps } from '.';
import { useSelect } from '../../utilities';

export default {
	title: 'ChoiceField',
	component: ChoiceField,
};

const label = 'Which of the following is a vegetable?';
const defaultCorrect = 'Green Bean';
const defaultChoices = ['Apple', 'Banana', defaultCorrect, 'Tomato'];

const ChoiceFieldTemplate = (args: ChoiceFieldProps) => <ChoiceField {...args} />;

export const Default = ChoiceFieldTemplate.bind({});
Default.args = {
	label,
	description: 'This field is in its default state.',
	multiple: false,
	children: defaultChoices.map((fruit) => (
		<Choice key={fruit} value={fruit}>
			{fruit}
		</Choice>
	)),
};

export const WithChoices = ChoiceFieldTemplate.bind({});
WithChoices.args = {
	label,
	description:
		'This field is in its checkbox state and uses the Choices component to map its choices.',
	multiple: true,
	children: <Choices choices={defaultChoices} selected="Banana" />,
};

export const ControlledRadio = (args: ChoiceFieldProps) => {
	const { formChangeHandler, selected } = useSelect();

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<ChoiceField onChange={formChangeHandler} {...args}>
			{/* manually map a list to Choice elements */}
			{[
				{ value: 'apple', children: 'Apple' },
				{ value: 'banana', children: 'Banana' },
				{ value: 'green-bean', children: 'Green Bean' },
				{ value: 'tomato', children: 'Tomato' },
			].map(({ value, ...props }) => (
				<Choice
					checked={selected.includes(value)}
					value={value}
					name="fruit"
					key={value}
					{...props}
				/>
			))}
		</ChoiceField>
	);
};
ControlledRadio.args = {
	label,
	description: 'This field is in its radio state and uses externally-controlled state.',
};

export const ControlledCheckbox = (args: ChoiceFieldProps) => {
	const { formChangeHandler, selected } = useSelect(true);

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<ChoiceField {...args} multiple>
			{/* use the Choices utility component to map a list of choices */}
			<Choices choices={defaultChoices} selected={selected} onChange={formChangeHandler} />
		</ChoiceField>
	);
};
ControlledCheckbox.args = {
	label,
	description: 'This field is in its checkbox state and uses externally-controlled state.',
};

export const ChoiceList = ({ choices, name, ...args }: ChoicesProps) => (
	<Choices choices={defaultChoices} name="choices" {...args} />
);
ChoiceList.args = {
	description: "These choices don't have the field label or description.",
};
