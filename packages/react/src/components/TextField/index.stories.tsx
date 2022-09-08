import React from 'react';
import { Meta } from '@storybook/react';
import { TextField,	TextFieldProps } from '.';
import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from '../Icon';

export default {
	title: 'Text Field',
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

const TextFieldTemplate = (args: TextFieldProps) => <TextField {...args} />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
	children: 'Default Text Field',
	description: 'The default Text Field has a type of "text".',
};

export const Email = TextFieldTemplate.bind({});
Email.args = {
	children: 'Email',
	description: 'Email fields show an error if the value is not an email address.',
	type: 'email',
	validateOnChange: true,
};

export const Number = TextFieldTemplate.bind({});
Number.args = {
	children: 'Number',
	description: 'Email fields can be incremented with arrow keys and show an error if the value is not a number.',
	type: 'number',
	validateOnChange: true,
};

export const Password = TextFieldTemplate.bind({});
Password.args = {
	children: 'Password',
	description: 'Password fields obscure their value.',
	type: 'password',
	validateOnChange: true,
};

export const WithMaxLength = TextFieldTemplate.bind({});
WithMaxLength.args = {
	maxLengthRestrictsInput: false,
	maxLength: 10,
	counterStart: 8,
	validateOnChange: true,
	children: 'TextField with max length',
	description: 'Control the maximum length and optionally prevent input after that number of characters.',
};

export const WithAddonBefore = TextFieldTemplate.bind({});
WithAddonBefore.args = {
	addonBefore: <Button variant="ghost">Do something</Button>,
	children: 'Text field with a button addon before the input',
};

export const WithAddonAfter = TextFieldTemplate.bind({});
WithAddonAfter.args = {
	addonAfter: <Button variant="outline">Do something else</Button>,
	children: 'Text field with a button addon after the input',
};

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
const invalid: IconProps = { variant: 'close', color: 'var(--nds-error-color)', 'aria-label': 'Invalid' };
const valid: IconProps = { variant: 'check', color: 'var(--nds-success-color)', 'aria-label': 'Valid' };
const neutralUser: IconProps = { variant: 'account' };
const neutralPW: IconProps = { variant: 'info' };

export const ExampleLoginForm = ({ minLength, maxLength, ...args }: TextFieldProps) => {
	const [type, setType] = React.useState<TextFieldProps['type']>('password');
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
				{...args}
			>
				Username
			</TextField>
			<TextField
				type={type}
				value={password}
				errors={errors(pwErrors)}
				required
				minLength={minLength}
				maxLength={maxLength}
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
				{...args}
			>
				Password
			</TextField>
			<Button variant="solid" type="submit">Submit</Button>
		</form>
	);
};
ExampleLoginForm.args = {
	minLength: 8,
	maxLength: 32,
};

type CustomValidationProps = TextFieldProps & { firstName: string; lastName: string; };
export const CustomValidation = ({ firstName, lastName, ...args }: CustomValidationProps) => {
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
			description="Change the required name in the Storybook controls below."
			feedback={feedback}
			required
			{...args}
		>
			Full name
		</TextField>
	);
};
CustomValidation.args = {
	firstName: 'Jane',
	lastName: 'Doe',
};
