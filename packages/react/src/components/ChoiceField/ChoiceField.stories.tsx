import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { ChoiceField, Choice, Choices } from '.';
import { useSelect } from '../../utilities';

const meta = {
	title: 'Components/ChoiceField',
	component: ChoiceField,
} satisfies Meta<typeof ChoiceField>;

export default meta;

type Story = StoryObj<typeof ChoiceField>;

const label = 'Which of the following is a vegetable?';
const defaultCorrect = 'Green Bean';
const defaultChoices = ['Apple', 'Banana', defaultCorrect, 'Tomato'];

export const Default = {
	args: {
		label,
		description: 'This field is in its default state.',
		multiple: false,
		children: defaultChoices.map((fruit) => (
			<Choice key={fruit} value={fruit}>
				{fruit}
			</Choice>
		)),
	},
} satisfies Story;

export const WithChoices = {
	args: {
		label,
		description:
			'This field is in its checkbox state and uses the Choices component to map its choices.',
		multiple: true,
		children: <Choices choices={defaultChoices} selected="Banana" />,
	},
} satisfies Story;

export const ControlledRadio = {
	render: (args) => {
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
	},
	args: {
		label,
		description: 'This field is in its radio state and uses externally-controlled state.',
	},
} satisfies Story;

export const ControlledCheckbox = {
	render: (args) => {
		const { formChangeHandler, selected } = useSelect(true);

		React.useEffect(() => action('selection change')(selected), [selected]);

		return (
			<ChoiceField {...args} multiple>
				{/* use the Choices utility component to map a list of choices */}
				<Choices choices={defaultChoices} selected={selected} onChange={formChangeHandler} />
			</ChoiceField>
		);
	},
	args: {
		label,
		description: 'This field is in its checkbox state and uses externally-controlled state.',
	},
} satisfies Story;

type ChoicesStory = StoryObj<typeof Choices>;

export const ChoiceList = {
	render: ({ choices, name, ...args }) => (
		<Choices choices={defaultChoices} name="choices" {...args} />
	),
	args: {
		description: "These choices don't have the field label or description.",
	},
} satisfies ChoicesStory;
