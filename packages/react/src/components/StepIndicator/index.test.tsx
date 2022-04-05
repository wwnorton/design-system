import {
	cleanup, render, screen, within,
} from '@testing-library/react';
import test from 'ava';
import React from 'react';
import { Step } from './Step';
import { StepIndicator } from './StepIndicator';

test.afterEach(cleanup);

const numberOfSteps = 5;

const SimpleStepIndicator = ({ currentStepId = 0, completedSteps = 0 }) => (
	<StepIndicator>
		{Array.from(Array(numberOfSteps)).map((_, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<Step key={index} isCompleted={index < completedSteps} isCurrent={index === currentStepId}>
				Step
				{' '}
				{index + 1}
			</Step>
		))}
	</StepIndicator>
);

test('renders as a list with one item per step', (t) => {
	render(
		<SimpleStepIndicator />,
	);
	const stepIndicator = screen.queryByRole('list');

	t.truthy(stepIndicator);
	t.is(screen.queryAllByRole('listitem').length, numberOfSteps);
});

test('renders a step as current and incomplete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={1} />,
	);

	const currentStep = screen.getByRole('listitem', { current: 'step' });

	t.falsy(within(currentStep).queryByLabelText('completed'));
});

test('renders a step as current and complete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={1} completedSteps={2} />,
	);

	const currentStep = screen.getByRole('listitem', { current: 'step' });

	t.truthy(within(currentStep).getByText('completed'));
});

test('renders a step as not-current and complete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={2} completedSteps={2} />,
	);

	const firstStep = screen.getAllByRole('listitem', { current: false })[0];

	t.truthy(within(firstStep).getByText('completed'));
});

test('renders a step as not-current and incomplete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={2} completedSteps={0} />,
	);

	const firstStep = screen.getAllByRole('listitem', { current: false })[0];

	t.falsy(within(firstStep).queryByText('completed'));
});
