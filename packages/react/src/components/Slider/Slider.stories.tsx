import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '.';

const meta = {
	title: 'Components/Slider',
	parameters: {
		layout: 'centered',
	},
	component: Slider,
	args: {
		label: 'Volume',
	},
	argTypes: {},
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default = {
	args: {
		max: 2,
	},
} satisfies Story;

export const Vertical = {
	args: {
		isVertical: true,
	},
} satisfies Story;

export const WithIndicators = {
	args: {
		valueIndicators: true,
		max: 3,
		step: 1,
	},
} satisfies Story;

export const WithCustomIndicators = {
	args: {
		max: 10,
		step: 1,
		valueIndicators: [
			{ value: 0 },
			{ value: 2, label: '20' },
			{ value: 8, label: '8' },
			{ value: 10 },
		],
	},
} satisfies Story;

export const WithSelectedValueLabel = {
	args: {
		max: 5,
		step: 1,
		valueIndicators: [
			{ value: 1, label: 'Low' },
			{ value: 2, label: 'Medium' },
			{ value: 3, label: 'High' },
			{ value: 4, label: 'Very High' },
			{ value: 5, label: 'Maximum' },
		],
	},
} satisfies Story;

export const WithSupportingText = {
	args: {
		label: 'Volume',
		supportingText: 'Choose a value between 0 and 100.',
		max: 100,
	},
} satisfies Story;

export const Centered = {
	args: {
		label: 'Volume',
		variation: 'centered',
		max: 100,
		valueIndicators: [
			{ value: 0, label: 'Off' },
			{ value: 50, label: 'Medium' },
			{ value: 100, label: 'Maximum' },
		],
		value: 50,
	},
} satisfies Story;

export const WithLeftIcon = {
	args: {
		leftIcon: 'minus',
	},
} satisfies Story;

export const WithLeftIconWithCustomIndicators = {
	args: {
		leftIcon: 'minus',
		max: 10,
		step: 1,
		valueIndicators: [
			{ value: 0, label: 'Min' },
			{ value: 10, label: 'Max' },
		],
	},
} satisfies Story;

export const WithRightIcon = {
	args: {
		rightIcon: 'plus',
	},
} satisfies Story;

export const WithLeftAndRightIcons = {
	args: {
		leftIcon: 'minus',
		rightIcon: 'plus',
	},
} satisfies Story;

export const WithInput = {
	args: {
		showInput: true,
		max: 100,
	},
} satisfies Story;
