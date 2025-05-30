import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Feedback } from '.';

const meta = {
	title: 'Patterns/Multiple Choice',
	component: Feedback,
	args: {
		children: (
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		),
	},
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof Feedback>;

export const IncorrectFeedback = {
	args: {
		isOpen: true,
		choiceText: 'Answer Choice 3',
		choiceLabel: 'C',
	},
} satisfies Story;

export const CorrectFeedback = {
	args: {
		isOpen: true,
		isCorrect: true,
		choiceText: 'Answer Choice 3',
		choiceLabel: 'C',
	},
} satisfies Story;
