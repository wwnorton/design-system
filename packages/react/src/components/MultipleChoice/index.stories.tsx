import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultipleChoice } from './multiple-choice';
import { PatternExample as PatternExampleComponent } from './pattern-example';

const meta: Meta<typeof MultipleChoice> = {
	component: MultipleChoice,
};

export default meta;
type Story = StoryObj<typeof MultipleChoice>;

const choices = [
	'Jayvon, who had opened a checking account at the branch that same day',
	'Ibrahim, who is taking propranolol to control his blood pressure',
	'Huong, who was born with Urbach-Wiethe syndrome and lacks an amygdala',
];

export const Unanswered: Story = {
	args: {
		intro: 'Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby.',
		stem: 'Which of the people is likely to best remember the event afterward?',
		instructions: 'Select one that applies. You have 2 attempts remaining.',
		status: 'unanswered',
		choices,
	},
};

export const Correct: Story = {
	args: {
		intro: 'Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby.',
		stem: 'Which of the people is likely to best remember the event afterward?',
		instructions: 'Select one that applies. You have 2 attempts remaining.',
		status: 'correct',
		labelType: 'upper-roman',
		selected: 2,
		choices,
	},
};

export const Incorrect: Story = {
	args: {
		intro: 'Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby.',
		stem: 'Which of the people is likely to best remember the event afterward?',
		instructions: 'Select one that applies. You have 2 attempts remaining.',
		status: 'incorrect',
		labelType: 'upper-alpha',
		selected: 1,
		choices,
	},
};

export const PatternExample: Story = {
	render: () => (
		<PatternExampleComponent choices={choices} />
	),
};
