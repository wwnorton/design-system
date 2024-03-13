import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AnswerChoice, MultipleChoice } from './MultipleChoice';
import { MultipleChoicePattern } from './pattern-example';

const meta: Meta<typeof MultipleChoice> = {
	component: MultipleChoice,
};

export default meta;
type Story = StoryObj<typeof MultipleChoice>;

const choices = [
	<AnswerChoice>
		Jayvon, who had opened a checking account at the branch that same day
	</AnswerChoice>,
	<AnswerChoice>
		Ibrahim, who is taking propranolol to control his blood pressure
	</AnswerChoice>,
	<AnswerChoice>
		Huong, who was born with Urbach-Wiethe syndrome and lacks an amygdala
	</AnswerChoice>,
];

export const Unanswered: Story = {
	args: {
		intro: 'Three people are present when a pregnant person suddenly goes into labor and gives birth in a bank lobby.',
		stem: 'Which of the people is likely to best remember the event afterward?',
		instructions: 'Select one that applies. You have 2 attempts remaining.',
		status: 'unanswered',
		children: choices,
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
		children: choices,
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
		children: choices,
	},
};

export const PatternExample: Story = {
	render: () => (
		<MultipleChoicePattern />
	),
};
