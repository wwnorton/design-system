import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Callout } from '.';

const meta = {
	title: 'Components/Callout',
	component: Callout,
	decorators: [
		(StoryComponent): JSX.Element => (
			<div style={{ maxWidth: '30rem' }}>
				<StoryComponent />
			</div>
		),
	],
	args: {
		children: (
			<p>
				Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
				been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
				took a galley of type.
			</p>
		),
		dismissible: false,
	},
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default = {
	args: { title: 'Default Callout' },
} satisfies Story;

export const NoTitle = {
	args: { title: undefined },
} satisfies Story;

export const Success = {
	args: {
		title: 'Success!',
		color: 'success',
		border: 'left',
	},
} satisfies Story;

export const Warning = {
	args: {
		title: 'Warning',
		color: 'warning',
		border: 'left',
		icon: 'warning',
	},
} satisfies Story;

export const Error = {
	args: {
		title: 'Error',
		color: 'error',
		border: 'left',
		icon: 'exclamation',
	},
} satisfies Story;
