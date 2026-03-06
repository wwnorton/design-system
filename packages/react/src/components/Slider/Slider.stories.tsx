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
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default = {
	args: {},
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
