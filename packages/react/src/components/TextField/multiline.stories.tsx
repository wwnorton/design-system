import React from 'react';
import { Meta } from '@storybook/react-vite';
import { TextField, TextFieldProps } from '.';

export default {
	title: 'Text Field - Multiline',
	component: TextField,
	argTypes: {
		maxLength: {
			control: { type: 'range', min: 5, step: 1 },
		},
		maxLengthRestrictsInput: { control: { type: 'boolean' } },
		counterStart: {
			control: { type: 'range', min: 5, step: 1 },
		},
		validateOnChange: { control: { type: 'boolean' } },
	},
} as Meta<TextFieldProps>;

const TextFieldTemplate = (args: TextFieldProps) => <TextField multiline {...args} />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
	autoSize: true,
	children: 'Multiline Text Field',
	description: 'This field allows for multiple lines of text and will automatically resize.',
};

export const WithSetRows = TextFieldTemplate.bind({});
WithSetRows.args = {
	multiline: 5,
	autoSize: false,
	children: 'Multiline Text Field with rows',
	description: 'This field will internally scroll after the specified number of rows.',
};

export const WithMaxLength = TextFieldTemplate.bind({});
WithMaxLength.args = {
	maxLength: 10,
	counterStart: 8,
	children: 'Multiline Text Field with Max Length',
	description: 'This field',
};
