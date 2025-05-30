import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, IconOptions } from '.';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		size: {
			control: {
				type: 'range',
				min: 24,
				max: 512,
				step: 4,
			},
		},
		color: {
			control: {
				type: 'color',
				presetColors: [
					{ color: 'var(--nds-blue-60)', title: 'blue-60' },
					{ color: 'var(--nds-cyan-60)', title: 'cyan-60' },
					{ color: 'var(--nds-gray-60)', title: 'gray-60' },
					{ color: 'var(--nds-green-60)', title: 'green-60' },
					{ color: 'var(--nds-navy-60)', title: 'navy-60' },
					{ color: 'var(--nds-purple-60)', title: 'purple-60' },
					{ color: 'var(--nds-red-60)', title: 'red-60' },
					{ color: 'var(--nds-teal-60)', title: 'teal-60' },
					{ color: 'var(--nds-yellow-60)', title: 'yellow-60' },
				],
			},
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default = {
	args: {
		variant: 'caret-right',
	},
} satisfies Story;

export const WithARIALabel = {
	args: {
		variant: 'caret-right',
		'aria-label': 'Right-pointing caret',
	},
} satisfies Story;

export const WithContent = {
	args: {
		variant: 'info',
		children:
			'When an icon has content, that content is used to label the icon via a tooltip. Think of this as the "alt text" for the icon.',
	},
} satisfies Story;

export const AllIcons = {
	render: (args) => (
		<div className="icon-list">
			{Object.keys(IconOptions).map((key) => (
				<Icon
					key={IconOptions[key]}
					variant={IconOptions[key]}
					tooltipProps={{ hideDelay: 0 }}
					{...args}
				>
					{key}
				</Icon>
			))}
		</div>
	),
	args: {
		size: 48,
		color: 'currentColor',
	},
} satisfies Story;
