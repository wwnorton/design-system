import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Feedback } from '.';

const meta: Meta<typeof Feedback> = {
	title: 'Feedback',
	component: Feedback,
};
export default meta;

type Story = StoryObj<typeof Feedback>;

const template: Story = {
	render: ({ ...args }) => (
		<Feedback {...args}>
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</Feedback>
	),
};

export const Incorrect: Story = {
	...template,
	args: {
		isOpen: true,
		choiceText: 'Answer Choice 3',
		choiceLabel: 'C',
	},
};

export const Correct: Story = {
	...template,
	args: {
		isOpen: true,
		isCorrect: true,
		choiceText: 'Answer Choice 3',
		choiceLabel: 'C',
	},
};
