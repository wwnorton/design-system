import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldFeedback } from '.';

const meta = {
	title: 'Components/Field Feedback',
	component: FieldFeedback,
} satisfies Meta<typeof FieldFeedback>;

export default meta;

type Story = StoryObj<typeof FieldFeedback>;

export const Feedback = {
	args: {
		errors: ['Not allowed', 'A second error'],
		children: 'Assorted additional feedback',
	},
} satisfies Story;
