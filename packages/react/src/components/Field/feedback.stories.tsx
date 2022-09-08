import React from 'react';
import { FieldFeedback, FieldFeedbackProps } from '.';

export default {
	title: 'FieldFeedback',
	component: FieldFeedback,
};

export const Default = (args: FieldFeedbackProps) => <FieldFeedback {...args} />;
Default.args = {
	errors: ['Not allowed', 'A second error'],
	children: 'Assorted additional feedback',
};
