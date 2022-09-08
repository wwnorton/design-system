import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	Radio, RadioProps,
	RadioGroup as RadioGroupComp, RadioGroupProps,
} from '.';
import { Link } from '../Link';
import { useSelect } from '../../utilities';

export default {
	title: 'Radio',
	component: Radio,
};

const RadioTemplate = (args: RadioProps) => <Radio {...args} />;

export const Default = RadioTemplate.bind({});
Default.args = {
	description: 'This is a radio button with all its defaults',
	children: 'Radio',
};

export const WithThumbnail = RadioTemplate.bind({});
WithThumbnail.args = {
	description: (
		<>
			This radio includes a clickable thumbnail from
			{' '}
			<Link href="https://picsum.photos" external>https://picsum.photos</Link>
		</>
	),
	thumbnail: <img src="https://picsum.photos/64" alt="" />,
	children: 'Radio',
};

const fruits = [
	{ value: 'apple', children: 'Apple' },
	{ value: 'banana', children: 'Banana' },
	{ value: 'kiwi', children: 'Kiwi' },
	{ value: 'orange', children: 'Orange' },
];

export const RadioGroup = (args: RadioGroupProps) => (
	<RadioGroupComp {...args}>
		<Radio>Apple</Radio>
		<Radio>Banana</Radio>
		<Radio>Kiwi</Radio>
		<Radio>Orange</Radio>
	</RadioGroupComp>
);
RadioGroup.args = {
	label: 'Choose your favorite fruit',
	name: 'fruit',
};

export const ControlledRadioGroup = (args: RadioGroupProps) => {
	const { selected, formChangeHandler } = useSelect();

	React.useEffect(() => action('selection change')(selected), [selected]);

	return (
		<RadioGroupComp {...args}>
			{/* Choices can be mapped manually or with the <Choices> component */}
			{
				fruits.map(({ value, ...props }) => (
					<Radio
						checked={selected.includes(value)}
						onChange={formChangeHandler}
						value={value}
						name="fruit"
						key={value}
						{...props}
					/>
				))
			}
			{/* <Choices
				choices={fruits}
				selected={selected}
				onChange={changeHandler}
				name="fruit"
			/> */}
		</RadioGroupComp>
	);
};
ControlledRadioGroup.args = {
	label: 'Choose your favorite fruit',
	description: 'This example demonstrates how state can be controlled externally.',
	name: 'fruit',
};
