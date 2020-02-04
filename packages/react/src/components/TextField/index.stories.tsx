import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	number,
	text,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/textfield/index.scss';
import TextField from '.';

export default {
	title: 'Text Field',
	component: TextField,
	decorators: [withKnobs],
};

const { defaultProps } = TextField;

export const Default = (): JSX.Element => (
	<TextField
		label={text('Label', 'Default Text Field')}
		help='The default Text Field has a type of "text"'

		constraintValidation={boolean('Constraint validation', true)}
		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const Email = (): JSX.Element => (
	<TextField
		type="email"
		label="Email"

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const Number = (): JSX.Element => (
	<TextField
		type="number"
		label="Number"
		help="Enter a number between 2 and 8."
		min={number('Minimum', 2)}
		max={number('Maximum', 8)}

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const Password = (): JSX.Element => (
	<TextField
		type="password"
		label="Password"
		minLength={number('Minimum length', 8)}

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const Telephone = (): JSX.Element => (
	<TextField
		type="tel"
		label="Phone number"

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const URL = (): JSX.Element => (
	<TextField
		type="url"
		label="URL"

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);

export const withMaxLength = (): JSX.Element => (
	<TextField
		label="Text Field with max length"
		maxLength={number('Maximum length', 10)}
		counterStart={number('Start counter at', 8)}
		onCount={action('onCount')}
		validateOnInput

		includeDefaultValidators={boolean('Include default validators', true)}
		onChangeNative={action('onChangeNative')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required as boolean)}
		validateOnChange={boolean('Validate on React change (the DOM\'s oninput)', false)}
		validateOnChangeNative={boolean('Validate on DOM change', true)}
	/>
);
