import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useFloating } from '@floating-ui/react';
import { FloatingFieldFeedback } from './FloatingFieldFeedback';

const meta = {
	parameters: {
		docs: {
			codePanel: true,
		},
	},
	title: 'Components/Floating Field Feedback',
	component: FloatingFieldFeedback,
} satisfies Meta<typeof FloatingFieldFeedback>;

export default meta;

type Story = StoryObj<typeof FloatingFieldFeedback>;

export const Feedback = {
	args: {
		errors: ['Not allowed', 'A second error'],
	},
	render: (args) => {
		const { floatingStyles, refs } = useFloating();

		return (
			<div style={{ maxWidth: '300px' }}>
				<FloatingFieldFeedback ref={refs.setFloating} {...args} style={floatingStyles} />
			</div>
		);
	},
} satisfies Story;
