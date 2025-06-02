import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Radio, RadioGroup as RadioGroupComp } from '.';
import { Link } from '../Link';
import { useSelect } from '../../utilities';

const meta = {
	title: 'Components/Radio',
	component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default = {
	args: {
		description: 'This is a radio button with all its defaults',
		children: 'Radio',
	},
} satisfies Story;

export const WithThumbnail = {
	args: {
		description: (
			<>
				This radio includes a clickable thumbnail from{' '}
				<Link href="https://picsum.photos" external>
					https://picsum.photos
				</Link>
			</>
		),
		thumbnail: (
			<img
				src="https://fastly.picsum.photos/id/318/64/64.jpg?hmac=2PzGNEbR8z5b0WVzVmWqGukhnthohOzHvtF6XYO0r9Q"
				alt=""
			/>
		),
		children: 'Radio',
	},
} satisfies Story;

type GroupStory = StoryObj<typeof RadioGroupComp>;

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const RadioGroup = {
	render: (args) => (
		<RadioGroupComp {...args}>
			<Radio>Apple</Radio>
			<Radio>Banana</Radio>
			<Radio>Kiwi</Radio>
			<Radio>Orange</Radio>
		</RadioGroupComp>
	),
	args: {
		label: 'Choose your favorite fruit',
		name: 'fruit',
	},
} satisfies GroupStory;

export const ControlledRadioGroup = {
	render: (args) => {
		const { selected, formChangeHandler } = useSelect();

		React.useEffect(() => action('selection change')(selected), [selected]);

		return (
			<RadioGroupComp {...args}>
				{/* Choices can be mapped manually or with the <Choices> component */}
				{fruits.map(({ value, ...props }) => (
					<Radio
						checked={selected.includes(value)}
						onChange={formChangeHandler}
						value={value}
						name="fruit"
						key={value}
						{...props}
					/>
				))}
				{/* <Choices
					choices={fruits}
					selected={selected}
					onChange={changeHandler}
					name="fruit"
				/> */}
			</RadioGroupComp>
		);
	},
	args: {
		label: 'Choose your favorite fruit',
		description: 'This example demonstrates how state can be controlled externally.',
		name: 'fruit',
	},
} satisfies GroupStory;
