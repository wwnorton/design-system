import React from 'react';
import { Spinner, SpinnerProps } from '.';

export default {
	title: 'Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
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
};

const SpinnerTemplate = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = SpinnerTemplate.bind({});
Default.args = {
	progress: undefined,
	label: 'Loading...',
};

export const Determinate = SpinnerTemplate.bind({});
Determinate.args = {
	progress: 0.8,
	label: 'Almost there...',
};

export const LabelBelow = SpinnerTemplate.bind({});
LabelBelow.args = {
	labelPosition: 'bottom',
	label: 'Loading...',
};
