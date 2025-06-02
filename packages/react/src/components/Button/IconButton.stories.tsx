import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '.';
import { IconOptions } from '../Icon';

const meta = {
	title: 'Components/Button',
	component: IconButton,
	argTypes: {
		variant: {
			control: {
				type: 'inline-radio',
				options: {
					None: undefined,
					Solid: 'solid',
					Outline: 'outline',
					Ghost: 'ghost',
				},
			},
		},
		icon: {
			control: {
				type: 'select',
				options: { None: undefined, ...IconOptions },
			},
		},
	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconButtonStory = {
	args: { icon: 'close', children: 'Close' },
	name: 'Icon Button (close)',
} satisfies Story;

export const CustomIcon = {
	args: {
		children: 'Light',
		icon: {
			d: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
			source: 'https://material.io/resources/icons/?icon=wb_sunny&style=baseline',
		},
		variant: 'solid',
	},
	name: 'Icon Button (custom)',
} satisfies Story;
