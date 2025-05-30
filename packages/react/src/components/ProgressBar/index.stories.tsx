import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from '.';

const meta = {
	title: 'Components/ProgressBar',
	component: ProgressBar,
	argTypes: {
		hideLabel: { control: { type: 'boolean' } },
		buffer: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.05,
			},
		},
		progress: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.05,
			},
		},
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default = {
	args: {
		progress: undefined,
		buffer: undefined,
		label: 'Loading...',
	},
} satisfies Story;

export const Determinate = {
	args: {
		progress: 0.8,
		label: 'Almost there...',
	},
} satisfies Story;

export const Buffered = {
	args: {
		progress: 0.1,
		buffer: 0.3,
		label: 'Buffering...',
	},
} satisfies Story;
