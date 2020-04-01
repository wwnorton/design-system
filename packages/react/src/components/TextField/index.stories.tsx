import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	number,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import TextField from '.';

export default {
	title: 'Text Field',
	component: TextField,
	decorators: [withKnobs],
};

const { defaultProps } = TextField;

export const Default = (): React.ReactElement => (
	<TextField
		label={text('Label', 'Default Text Field')}
		help='The default Text Field has a type of "text"'

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const Email = (): React.ReactElement => (
	<TextField
		type="email"
		label="Email"

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const Number = (): React.ReactElement => (
	<TextField
		type="number"
		label="Number"
		help="Enter a number between 2 and 8."
		min={number('Minimum', 2)}
		max={number('Maximum', 8)}

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const Password = (): React.ReactElement => (
	<TextField
		type="password"
		label="Password"
		minLength={number('Minimum length', 8)}

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const Telephone = (): React.ReactElement => (
	<TextField
		type="tel"
		label="Phone number"

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const URL = (): React.ReactElement => (
	<TextField
		type="url"
		label="URL"

		onDOMChange={action('onDOMChange')}
		onValidate={action('onValidate')}
		required={boolean('Required', defaultProps.required)}
		validateOnChange={boolean('Validate on React change', false)}
		validateOnDOMChange={boolean('Validate on DOM change', true)}
	/>
);

export const withMaxLength = (): React.ReactElement => (
	<TextField
		label="Text Field with max length"
		maxLength={number('Maximum length', 10)}
		counterStart={number('Start counter at', 8)}
		onCount={action('onCount')}
		validateOnInput
	/>
);

interface CustomValidationProps { firstName: string; lastName: string }
export const customValidation = (): React.ReactElement => {
	const CustomValidation: React.FunctionComponent<CustomValidationProps> = ({
		firstName,
		lastName,
	}: CustomValidationProps) => {
		const inputRef = React.useRef<HTMLInputElement>();
		const [value, setValue] = React.useState('');
		const [isValid, setValidity] = React.useState(false);
		const onChange = (e): void => {
			setValue(e.target.value);
			action('onChange')(e);
		};
		const onValidate = (state): void => {
			if (state.errors.length === 0) {
				setValidity(true);
			} else {
				setValidity(false);
			}
			action('onValidate')(state);
		};
		return (
			<>
				<TextField
					inputRef={inputRef}
					value={value}
					onChange={onChange}

					label="Full name"
					help="Enter a value that begins with the first name and ends with the last name specified in the knobs below."
					validators={[
						{
							test: (v: string): boolean => v.startsWith(firstName),
							message: `Must begin with "${firstName}".`,
						},
						{
							test: (v: string): boolean => v.endsWith(lastName),
							message: `Must end with "${lastName}".`,
						},
					]}
					feedback={(isValid) ? `Well done, ${value}!` : undefined}

					onDOMChange={action('onDOMChange')}
					onValidate={onValidate}
					required
					validateOnChange
				/>
			</>
		);
	};
	return <CustomValidation firstName={text('First name', 'Jane')} lastName={text('Last name', 'Doe')} />;
};
