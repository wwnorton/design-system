import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackModal } from '.';

const meta: Meta<typeof FeedbackModal> = {
	title: 'FeedbackModal',
	component: FeedbackModal,
};
export default meta;

type Story = StoryObj<typeof FeedbackModal>;

const template: Story = {
	render: ({ ...args }) => (
		<FeedbackModal {...args}>
			<p>
				Answer feedback lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</FeedbackModal>
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
