import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	select,
	number,
	text,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/textfield/index.scss';
import { TextField, TextFieldType } from '.';

export default {
	title: 'Text Field',
	component: TextField,
	decorators: [withKnobs],
};

interface TextFieldTypeOpts {
	[name: string]: TextFieldType;
}

const TextFieldTypes: TextFieldTypeOpts = {
	text: 'text',
	number: 'number',
	email: 'email',
	password: 'password',
	url: 'url',
	tel: 'tel',
};

const { defaultProps } = TextField;

export const Default = (): JSX.Element => (
	<TextField
		type={select('Type', TextFieldTypes, defaultProps.type as TextFieldType)}
		label={text('Label', 'Default Text Field')}
		help={text('Help', 'The default Text Field can contain any text.')}
		error={text('Error', 'Not a valid text input')}
		required={boolean('Required', false)}
		validateOnChange={boolean('Validate on change', defaultProps.validateOnChange)}
		validateOnInput={boolean('Validate on input', defaultProps.validateOnInput)}
		onValidate={action('onValidate')}
	/>
);

export const withMaxLength = (): JSX.Element => (
	<TextField
		label={text('Label', 'Text Field with max length')}
		maxLength={number('maxLength', 10)}
		countStart={number('countStart', 8)}
		required={boolean('Required', false)}
		onCount={action('onCount')}
		validateOnInput
	/>
);
