import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { FieldFeedback } from '.';

export default {
	title: 'FieldFeedback',
	component: FieldFeedback,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<FieldFeedback
		errors={[
			text('Error 1', 'Not allowed'),
			text('Error 2', 'A second error'),
		].filter(Boolean)}
	>
		{ text('Additional feedback', 'Assorted additional feedback') }
	</FieldFeedback>
);
