import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	number,
	text,
	select,
} from '@storybook/addon-knobs';
import {
	TextField, TextFieldUncontrolled,
} from '.';
import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from '../Icon';
import { useValidation } from '../../utilities';
import { TextFieldProps, TextFieldType } from './types';

export default {
	title: 'Text Field',
	component: TextField,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => {
	const indicator = select('Show indicator', { None: undefined, Required: 'required', Optional: 'optional' }, undefined);
	return (
		<TextFieldUncontrolled
			description='The default Text Field has a type of "text"'
			disabled={boolean('Disabled', false)}
			onDOMChange={action('onDOMChange')}
			required={boolean('Required', false)}
			validateOnChange={boolean('Validate on React change', true)}
			validateOnDOMChange={boolean('Validate on DOM change', true)}
			requiredIndicator={indicator === 'required'}
			optionalIndicator={indicator === 'optional'}
		>
			{ text('Label', 'Default Text Field') }
		</TextFieldUncontrolled>
	);
};

export const ControlledEmail: React.FunctionComponent = () => {
	const indicator = select('Show indicator', { None: undefined, Required: 'required', Optional: 'optional' }, undefined);
	const [value, setValue] = React.useState('');
	const [errors, setErrors] = React.useState<string[]>([]);

	// the useValidation hook is helpful when you want to add validation on top
	// of default validators that don't fit into the { test, message } for
	// whatever reason
	const validate = useValidation();

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const val = e.target.value;
		const newErrors = validate(e.target);
		let allowValue = true;
		if (val && ['a', 'e', 'i', 'o', 'u'].some((letter) => val.toLowerCase().includes(letter))) {
			newErrors.push('Vowels are not allowed.');
			allowValue = false;
		}
		setErrors(newErrors);
		if (allowValue) setValue(val);
	};

	React.useEffect(() => action('value change')(value), [value]);
	React.useEffect(() => action('error change')(errors), [errors]);

	return (
		<TextField
			description="This example won't allow you to enter vowels (don't do this in the real world)"
			disabled={boolean('Disabled', false)}
			type="email"
			onChange={changeHandler}
			value={value}
			errors={errors}
			onDOMChange={action('onDOMChange')}
			required={boolean('Required', false)}
			validateOnChange={boolean('Validate on React change', true)}
			validateOnDOMChange={boolean('Validate on DOM change', true)}
			requiredIndicator={indicator === 'required'}
			optionalIndicator={indicator === 'optional'}
		>
			Email
		</TextField>
	);
};

export const EveryType: React.FunctionComponent = () => {
	const props: Partial<TextFieldProps> = {
		required: boolean('Required', false),
		validateOnChange: boolean('Validate on React change', true),
		validateOnDOMChange: boolean('Validate on DOM change', true),
	};

	return (
		<>
			<TextFieldUncontrolled type="email" {...props}>Email</TextFieldUncontrolled>
			<TextFieldUncontrolled type="number" {...props}>Number</TextFieldUncontrolled>
			<TextFieldUncontrolled type="password" {...props}>Password</TextFieldUncontrolled>
			<TextFieldUncontrolled type="search" {...props}>Search</TextFieldUncontrolled>
			<TextFieldUncontrolled type="tel" {...props}>Telephone</TextFieldUncontrolled>
			<TextFieldUncontrolled type="text" {...props}>Text</TextFieldUncontrolled>
			<TextFieldUncontrolled type="url" {...props}>URL</TextFieldUncontrolled>
		</>
	);
};

export const WithMaxLength: React.FunctionComponent = () => (
	<TextFieldUncontrolled
		maxLength={number('Maximum length', 10)}
		counterStart={number('Start counter at', 8)}
		onCount={action('onCount')}
		validateOnChange
	>
		Text Field with max length
	</TextFieldUncontrolled>
);

export const WithAddonBefore: React.FunctionComponent = () => (
	<TextFieldUncontrolled
		type="text"
		addonBefore={<Button variant="ghost">Do something</Button>}
	>
		Text field with a button addon
	</TextFieldUncontrolled>
);

export const WithAddonAfter: React.FunctionComponent = () => (
	<TextFieldUncontrolled
		type="text"
		addonAfter={<Button variant="outline">Do something else</Button>}
	>
		Text field with a button addon
	</TextFieldUncontrolled>
);

const show: ButtonProps = {
	children: 'Show',
	icon: {
		d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
	},
};
const hide: ButtonProps = {
	children: 'Hide',
	icon: {
		d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
	},
};
const invalid: IconProps = { variant: 'close', color: 'var(--nds-error-color)', children: 'Invalid' };
const valid: IconProps = { variant: 'check', color: 'var(--nds-success-color)', children: 'Valid' };
const neutralUser: IconProps = { variant: 'account' };
const neutralPW: IconProps = { variant: 'info' };

export const LoginForm: React.FunctionComponent = () => {
	const [type, setType] = React.useState<TextFieldType>('password');
	const [userField, setUserField] = React.useState<HTMLInputElement | null>(null);
	const [pwField, setPwField] = React.useState<HTMLInputElement | null>(null);
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [buttonProps, setButtonProps] = React.useState<ButtonProps>(show);
	const [userErrors, setUserErrors] = React.useState<string[]>();
	const [pwErrors, setPwErrors] = React.useState<string[]>();
	const [isSame, setIsSame] = React.useState(false);
	const [pwIcon, setPWIcon] = React.useState<IconProps>(neutralPW);

	const toggle = (): void => {
		setType((type === 'password') ? 'text' : 'password');
	};

	const errors = React.useCallback((errs?: string[]) => {
		const sameError = 'Username and password cannot be the same.';
		if (isSame) return (errs) ? [...errs, sameError] : [sameError];
		return errs || [];
	}, [isSame]);

	React.useEffect(() => {
		if (username || password) {
			setIsSame(username === password);
		}
	}, [username, password]);

	React.useEffect(() => {
		if (pwErrors) {
			setPWIcon((pwErrors.length) ? invalid : valid);
		} else {
			setPWIcon(neutralPW);
		}
	}, [pwErrors]);

	React.useEffect(() => {
		setButtonProps((type === 'password') ? show : hide);
	}, [type]);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	const changeHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		const { value: val } = e.target as HTMLInputElement;
		switch (e.target) {
			case userField:
				setUsername(val);
				break;
			case pwField:
				setPassword(val);
				break;
			default:
		}
	};

	return (
		<form className="form" onSubmit={submitHandler} onChange={changeHandler}>
			<TextField
				type="text"
				value={username}
				errors={errors(userErrors)}
				onValidate={setUserErrors}
				validateOnChange
				required
				addonBefore={<Icon {...neutralUser} />}
				ref={setUserField}
			>
				Username
			</TextField>
			<TextField
				type={type}
				value={password}
				errors={errors(pwErrors)}
				required
				minLength={number('Minimum length', 8)}
				maxLength={number('Maximum length', 32)}
				onValidate={setPwErrors}
				validateOnChange
				addonBefore={<Icon className="addon-icon" {...pwIcon} />}
				addonAfter={(
					<Button
						iconOnly
						variant="ghost"
						onClick={toggle}
						{...buttonProps}
					/>
				)}
				ref={setPwField}
			>
				Password
			</TextField>
			<Button variant="solid" type="submit">Submit</Button>
		</form>
	);
};

export const CustomValidation: React.FunctionComponent = () => {
	const firstName = text('First name', 'Jane');
	const lastName = text('Last name', 'Doe');
	const [value, setValue] = React.useState('');
	const [errors, setErrors] = React.useState<string[]>();

	const changeHandler = (e): void => setValue(e.target.value);

	const feedback = React.useMemo(() => {
		if (errors && !errors.length) {
			return `Well done, ${value}!`;
		}
		return undefined;
	}, [errors, value]);

	React.useEffect(() => {
		if (value) {
			const newErrors: string[] = [];
			if (!value.startsWith(firstName)) newErrors.push(`Must begin with "${firstName}".`);
			if (!value.endsWith(lastName)) newErrors.push(`Must end with "${lastName}".`);
			setErrors(newErrors);
		}
	}, [value, firstName, lastName]);

	return (
		<TextField
			value={value}
			errors={errors}
			onChange={changeHandler}
			description="Change the required name in the Storybook knobs below."
			feedback={feedback}
			required
		>
			Full name
		</TextField>
	);
};

export const TextFieldMultiline: React.FunctionComponent = () => {
	const indicator = select('Show indicator', { None: undefined, Required: 'required', Optional: 'optional' }, undefined);
	return (
		<TextField
			multiline={boolean('multiline', true)}
			autoSize={boolean('autosize', true)}
			rows={number('rows', 1)}
			minRows={number('minRows', 1)}
			maxRows={number('maxRows', 5)}
			description='The default Text Field has a type of "text"'
			disabled={boolean('Disabled', false)}
			onDOMChange={action('onDOMChange')}
			required={boolean('Required', false)}
			validateOnChange={boolean('Validate on React change', true)}
			validateOnDOMChange={boolean('Validate on DOM change', true)}
			requiredIndicator={indicator === 'required'}
			optionalIndicator={indicator === 'optional'}
		>
			{ text('Label', 'Default Text Field') }
		</TextField>
	);
};

export const MultilineWithMaxLength: React.FunctionComponent = () => (
	<TextFieldUncontrolled
		multiline={boolean('multiline', true)}
		autoSize={boolean('autosize', true)}
		rows={number('rows', 2)}
		minRows={number('minRows', 1)}
		maxRows={number('maxRows', 5)}
		maxLength={number('Maximum length', 10)}
		counterStart={number('Start counter at', 8)}
		onCount={action('onCount')}
		validateOnChange
	>
		Text Field with max length
	</TextFieldUncontrolled>
);

export const CustomValidationMultiline: React.FunctionComponent = () => {
	const firstName = text('First name', 'Jane');
	const lastName = text('Last name', 'Doe');
	const [value, setValue] = React.useState('');
	const [errors, setErrors] = React.useState<string[]>();

	const changeHandler = (e): void => setValue(e.target.value);

	const feedback = React.useMemo(() => {
		if (errors && !errors.length) {
			return `Well done, ${value}!`;
		}
		return undefined;
	}, [errors, value]);

	React.useEffect(() => {
		if (value) {
			const newErrors: string[] = [];
			if (!value.startsWith(firstName)) newErrors.push(`Must begin with "${firstName}".`);
			if (!value.endsWith(lastName)) newErrors.push(`Must end with "${lastName}".`);
			setErrors(newErrors);
		}
	}, [value, firstName, lastName]);

	return (
		<TextField
			multiline={boolean('multiline', true)}
			autoSize={boolean('autoSize', true)}
			value={value}
			errors={errors}
			onChange={changeHandler}
			description="Change the required name in the Storybook knobs below."
			feedback={feedback}
			required
		>
			Full name
		</TextField>
	);
};
