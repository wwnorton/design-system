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

	const firstStep = screen.queryAllByRole('listitem')[0];
	const secondStep = screen.queryAllByRole('listitem')[1];

	t.is(firstStep.getAttribute('aria-current'), null);
	t.is(secondStep.getAttribute('aria-current'), 'step');
	t.falsy(within(secondStep).queryByLabelText('completed'));
});

test('renders a step as current and complete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={1} completedSteps={2} />,
	);

	const secondStep = screen.queryAllByRole('listitem')[1];

	t.is(secondStep.getAttribute('aria-current'), 'step');
	t.truthy(within(secondStep).getByLabelText('completed'));
});

test('renders a step as not-current and complete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={2} completedSteps={2} />,
	);

	const secondStep = screen.queryAllByRole('listitem')[1];

	t.is(secondStep.getAttribute('aria-current'), null);
	t.truthy(within(secondStep).getByLabelText('completed'));
});

test('renders a step as not-current and incomplete', (t) => {
	render(
		<SimpleStepIndicator currentStepId={2} completedSteps={0} />,
	);

	const secondStep = screen.queryAllByRole('listitem')[1];

	t.is(secondStep.getAttribute('aria-current'), null);
	t.falsy(within(secondStep).queryByLabelText('completed'));
});
