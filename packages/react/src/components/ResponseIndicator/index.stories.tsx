import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResponseIndicator } from './index';

const meta: Meta<typeof ResponseIndicator> = {
	title: 'Response Indicator',
	component: ResponseIndicator,
};
export default meta;

type Story = StoryObj<typeof ResponseIndicator>;

const Template: Story = {
	render: ({ ...args }) => <ResponseIndicator {...args} />,
};

// With Icon and Label
export const Default: Story = {
	...Template,
	args: {
		variant: 'correct',
		withIcon: true,
		placementIcon: 'left',
	},
};

// Label Only
export const LabelOnly: Story = {
	...Template,
	args: {
		withIcon: false,
	},
};

// Custom Label with icon only
export const CustomLabelWithIconOnly: Story = {
	...Template,
	args: {
		variant: 'correct',
		withIcon: true,
		label: 'You are alright',
	},
};

// Vertical Variant
export const VerticalVariant: Story = {
	...Template,
	args: {
		variant: 'incorrect',
		withIcon: true,
		placementIcon: 'top',
	},
};
