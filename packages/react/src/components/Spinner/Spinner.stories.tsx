import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '.';

const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		hideLabel: { control: { type: 'boolean' } },
		progress: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.05,
			},
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default = {
	args: {
		progress: undefined,
		label: 'Loading...',
	},
} satisfies Story;

export const Determinate = {
	args: {
		progress: 0.8,
		label: 'Almost there...',
	},
} satisfies Story;

export const LabelBelow = {
	args: {
		labelPosition: 'bottom',
		label: 'Loading...',
	},
} satisfies Story;
