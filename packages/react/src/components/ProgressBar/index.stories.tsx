import React from 'react';
import { ProgressBar, ProgressBarProps } from '.';

export default {
	title: 'ProgressBar',
	component: ProgressBar,
	argTypes: {
		hideLabel: { control: { type: 'boolean' } },
		buffer: {
			control: {
				type: 'range', min: 0, max: 1, step: 0.05,
			},
		},
		progress: {
			control: {
				type: 'range', min: 0, max: 1, step: 0.05,
			},
		},
	},
};

const ProgressBarTemplate = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Default = ProgressBarTemplate.bind({});
Default.args = {
	progress: undefined,
	buffer: undefined,
	label: 'Loading...',
};

export const Determinate = ProgressBarTemplate.bind({});
Determinate.args = {
	progress: 0.8,
	label: 'Almost there...',
};

export const Buffered = ProgressBarTemplate.bind({});
Buffered.args = {
	progress: 0.1,
	buffer: 0.3,
	label: 'Buffering...',
};
