import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepIndicatorProps, StepIndicator, Step } from '.';

/** To be added to every story-specific control's argTypes declaration	 */
const storySpecificCategory = 'Story Controls';

interface StepIndicatorStoryProps extends StepIndicatorProps {
	stepCount: number;
	completedSteps: number;
	currentStep: number;
	stepNameFn: (stepNumber: number) => string;
}

const StepIndicatorStory = ({
	stepCount,
	currentStep,
	completedSteps,
	stepNameFn = (n) => `Step ${n}`,
	...args
}: StepIndicatorStoryProps) => {
	const steps = React.useMemo(() => [...Array(stepCount + 1)], [stepCount]);

	return (
		<StepIndicator {...args}>
			{steps.map((_, i) => {
				const step = i + 1;
				return (
					<Step isCurrent={currentStep === step} isCompleted={step <= completedSteps}>
						{stepNameFn(step)}
					</Step>
				);
			})}
		</StepIndicator>
	);
};

const meta = {
	title: 'Components/StepIndicator',
	component: StepIndicator,
	decorators: [
		(StoryComponent) => (
			<div style={{ maxWidth: '30rem' }}>
				<StoryComponent />
			</div>
		),
	],
	args: {
		stepCount: 4,
		currentStep: 3,
		completedSteps: 2,
	},
	argTypes: {
		stepCount: {
			table: { category: storySpecificCategory },
			description: 'Controls the total number of steps',
			control: {
				type: 'range',
				min: 1,
				max: 10,
				step: 1,
			},
		},
		currentStep: {
			table: { category: storySpecificCategory },
			description: 'Controls the position of the current step',
			control: {
				type: 'range',
				min: 1,
				max: 10,
				step: 1,
			},
		},
		completedSteps: {
			table: { category: storySpecificCategory },
			description: 'Controls the number of completed steps',
			control: {
				type: 'range',
				min: 0,
				max: 10,
				step: 1,
			},
		},
		stepNameFn: { table: { category: storySpecificCategory } },
		isConnected: { type: 'boolean' },
	},
	render: StepIndicatorStory,
} satisfies Meta<typeof StepIndicatorStory>;

export default meta;

type Story = StoryObj<typeof StepIndicatorStory>;

export const Default = {} satisfies Story;

export const Connected = {
	args: {
		isConnected: true,
	},
} satisfies Story;

export const LongNames = {
	args: {
		isConnected: true,
		stepNameFn: (n) => `Step ${n} with very long name`,
	},
} satisfies Story;
