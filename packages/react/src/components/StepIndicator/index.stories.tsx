import { Story } from '@storybook/react';
import React from 'react';
import {
	StepIndicatorProps, StepIndicator, Step,
} from '.';

interface StepIndicatorControls extends StepIndicatorProps {
	stepCount: number,
	completedSteps: number,
	currentStep: number,
	connected: boolean,
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
		connected: {
			control: 'boolean',
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

export const LongNames: Story<StepIndicatorControls> = (
	{
		stepCount, currentStep, completedSteps, ...args
	},
) => {
	const steps = [];

	for (let i = 1; i <= stepCount; i += 1) {
		steps.push(
			<Step isCurrent={currentStep === i} isComplete={i <= completedSteps}>
				{`Step ${i} with very long name`}
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

export const NoConnector: Story<StepIndicatorControls> = (
	{
		stepCount, currentStep, completedSteps, ...args
	},
) => {
	const steps = [];

	for (let i = 1; i <= stepCount; i += 1) {
		steps.push(
			<Step isCurrent={currentStep === i} isComplete={i <= completedSteps}>
				{i}
			</Step>,
		);
	}

	return (
		<StepIndicator
			{...args}
			style={{ '--nds-stepindicator-max-step-width': '0' } as React.CSSProperties}
		>
			{steps}
		</StepIndicator>
	);
};

NoConnector.args = { connected: false, stepCount: 10 };
