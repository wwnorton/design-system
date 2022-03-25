import { Story } from '@storybook/react';
import React from 'react';
import {
	StepProps, StepIndicatorProps, StepIndicator, Step,
} from '.';

interface StepIndicatorControls extends StepIndicatorProps {
	stepCount: number,
	completedSteps: number,
	currentStep: number,
}

const baseDefaultProps = {
	stepCount: 4,
	currentStep: 3,
	completedSteps: 2,
} as StepIndicatorControls;

export default {
	title: 'StepIndicator',
	component: StepIndicator,
	decorators: [
		(StoryComponent: React.ComponentType): JSX.Element => (
			<div style={{ maxWidth: '30rem' }}>
				<StoryComponent />
			</div>
		),
	],
	args: baseDefaultProps,
	argTypes: {
		stepCount: {
			control: 'number',
		},
		currentStep: {
			control: 'number',
		},
		completedSteps: {
			control: 'number',
		},
	},
	layout: 'padded',
};

const StepIndicatorTemplate: Story<StepIndicatorControls> = (
	{
		stepCount, currentStep, completedSteps, ...args
	},
) => {
	const steps = [];

	for (let i = 1; i <= stepCount; i += 1) {
		steps.push(
			<Step isCurrent={currentStep === i} isComplete={i <= completedSteps}>
				{`Step ${i}`}
				{i === 4 && ' very long name'}
			</Step>,
		);
	}

	return (
		<StepIndicator
			{...args}
		>
			{steps}
		</StepIndicator>
	);
};

export const Default = StepIndicatorTemplate.bind({});

export const NoTitle = StepIndicatorTemplate.bind({});
NoTitle.args = {
} as StepIndicatorProps;
