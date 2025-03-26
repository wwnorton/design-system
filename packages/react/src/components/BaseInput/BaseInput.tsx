import React from 'react';
import { useForwardedRef, useLayoutEffect, useValidation } from '../../utilities';
import { BaseInputProps } from './types';

/**
 * A base `<input>` component. Adds a callback for the DOM's `change` event
 * (`onDOMChange`), which does not exist in React.
 */
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
	(
		{
			errors: errorsProp,
			validateOnChange,
			validateOnDOMChange = true,
			validators,
			// pull out maxLength because it prevents user input past the given
			// length, which is an anti-pattern according to our usage guidelines.
			maxLength,
			maxLengthRestrictsInput = false,
			onInput,
			onDOMChange,
			onValidate,
			...props
		}: BaseInputProps,
		ref,
	): React.ReactElement => {
		const [input, setInput] = useForwardedRef(ref);
		const [errors, setErrors] = React.useState(errorsProp);

		// treat the prop version of `errors` as the source of truth
		React.useEffect(() => setErrors(errorsProp), [errorsProp]);

		const validator = useValidation(validators);
		const validate = React.useCallback(
			({
				max,
				maxLength: elMaxLength,
				min,
				minLength,
				pattern,
				required,
				step,
				type,
				value,
				validity,
			}: HTMLInputElement) => {
				const errs = validator({
					max,
					maxLength: maxLength || elMaxLength,
					min,
					minLength,
					pattern,
					required,
					step,
					type,
					value,
					validity,
				});
				if (onValidate) onValidate(errs);
				if (!errorsProp) setErrors(errs);
			},
			[validator, onValidate, errorsProp, maxLength],
		);

		/**
		 * Unlike `onChange`, `onInput` will trigger even when the user enters a bad
		 * value, such as entering a letter in a `type="number"` field, so run
		 * validation here to catch the `ValidityState.badInput` errors.
		 */
		const inputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
			if (onInput) onInput(e);

			if (validateOnChange) validate(e.currentTarget);
		};

		const domChangeHandler = React.useCallback(
			(e: Event): void => {
				if (onDOMChange) onDOMChange(e);
				if (validateOnDOMChange) validate(e.target as HTMLInputElement);
			},
			[onDOMChange, validateOnDOMChange, validate],
		);

		// Reflect errors on the DOM's constraint validation API. This ensures that
		// browser tooltip text always matches the custom errors.
		React.useEffect(() => {
			if (input && input.willValidate) {
				const errString = !errors || !errors.length ? '' : errors.join('\n');
				input.setCustomValidity(errString);
			}
		}, [input, errors]);

		// Polyfill the DOM `change` listener
		useLayoutEffect(() => {
			if (input && domChangeHandler) {
				input.addEventListener('change', domChangeHandler);
			}
			return (): void => {
				if (input && domChangeHandler) {
					input.removeEventListener('change', domChangeHandler);
				}
			};
		}, [input, domChangeHandler]);

		return (
			<input
				ref={setInput}
				onInput={inputHandler}
				maxLength={maxLengthRestrictsInput ? maxLength : undefined}
				{...props}
			/>
		);
	},
);
