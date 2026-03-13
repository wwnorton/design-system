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

export const WithMarkers = {
	args: {
		showMarkers: true,
	},
} satisfies Story;

export const WithMarkersVertical = {
	args: {
		showMarkers: true,
		isVertical: true,
	},
} satisfies Story;
