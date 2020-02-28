import React from 'react';
import { noop } from '../../utilities/helpers';
import { InputType, ValidatorEntry, ValidatorError } from '../../utilities/validation';

export interface ValidationState {
	errors: ValidatorError[];
	validity?: ValidityState;
}

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Whether the DOM's constraint validation API should be used.
	 * @DOM https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
	*/
	constraintValidation?: boolean;
	/**
	 * A callback that will be triggered any time the DOM's native `change`
	 * event is triggered. Note that this event is different from React's
	 * `onChange` event, which triggers on the DOM's native `input` event.
	 */
	onChangeNative?: (e: Event) => void;
	/** A callback that will be triggered any time the input is validated. */
	onValidate?: (state: ValidationState) => void;
	/** A list of validator function and corresponding error message pairs. */
	validators?: ValidatorEntry[];
	/**
	 * Whether the validate method should be called when the DOM's native
	 * `change` event is triggered. Note that this event is different from
	 * React's `onChange` event, which triggers on the DOM's native `input`
	 * event.
	 */
	validateOnChangeNative?: boolean;
	/**
	 * Whether the validate method should be called when `onChange` is triggered.
	 * @alias `validateOnInput`
	 */
	validateOnChange?: boolean;
	/**
	 * Whether the validate method should be called when `onInput` is triggered.
	 * @alias `validateOnChange`
	 */
	validateOnInput?: boolean;
	/** @DOM https://html.spec.whatwg.org/multipage/input.html#attr-input-type */
	type?: InputType;
}

export default React.forwardRef<HTMLInputElement, BaseInputProps>(({
	onChangeNative = noop,
	onChange = noop,
	onValidate = noop,
	validators = [],
	validateOnChangeNative = true,
	validateOnChange = false,
	validateOnInput = false,
	constraintValidation = true,
	value: initialValue,
	type,
	...attributes
}: BaseInputProps, ref) => {
	// TODO: move all of this into a standalone hook so it can be used with BaseTextarea
	const inputRef = ref as React.RefObject<HTMLInputElement> || React.useRef<HTMLInputElement>(null);
	const [value, setValue] = React.useState(initialValue);
	const [validity, setValidity] = React.useState<ValidityState>();
	const [validate, setValidate] = React.useState(false);
	const changeNativeListener = React.useRef<(e: Event) => void>(noop);

	// validation effect
	React.useEffect(() => {
		if (validate) {
			const val = String(value);
			const err = new Set<ValidatorError>();
			validators.forEach(({ message, test }) => {
				// ensure that the message is a string or JSX Element
				const msg = (typeof message === 'function') ? message(val) : message;
				// evaluate the test and add the error message if it exists
				if (!test(val, validity) && message !== '') {
					err.add(msg);
				}
			});
			const errors = Array.from(err);
			if (inputRef.current) {
				if (constraintValidation) {
					const errString = (errors.length) ? errors.join('\n') : '';
					inputRef.current.setCustomValidity(errString);
				} else {
					inputRef.current.setCustomValidity('');
				}
			}
			onValidate({ errors, validity });
		}
		return (): void => setValidate(false);
	}, [constraintValidation, inputRef, onValidate, validate, validators, validity, value]);

	// update the DOM `change` listener
	React.useEffect(() => {
		changeNativeListener.current = (e: Event): void => {
			const target = e.target as HTMLInputElement;
			const parser = (type === 'number') ? Number : String;
			setValue(parser(target.value));
			setValidity(target.validity);
			if (validateOnChangeNative) setValidate(true);
			onChangeNative(e);
		};
	}, [onChangeNative, type, validateOnChangeNative]);

	// attach the DOM `change` listener
	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.addEventListener('change', changeNativeListener.current);
		}
	}, [inputRef]);

	const changeListener = (e: Parameters<typeof onChange>[0]): void => {
		const { target } = e;
		const parser = (type === 'number') ? Number : String;
		setValue(parser(target.value));
		setValidity(target.validity);
		if (validateOnChange || validateOnInput) setValidate(true);
		onChange(e);
	};

	return (
		<input
			type={type}
			value={value}
			onChange={changeListener}
			ref={inputRef}
			{...attributes}
		/>
	);
});
