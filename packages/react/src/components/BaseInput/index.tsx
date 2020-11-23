import React from 'react';
import { useForwardedRef, useValidation } from '../../hooks';
import { InputType, ValidatorEntry, ValidationElement } from '../../utilities';

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * A list of validation errors. When the input is submitted in a form, the
	 * list will be concatenated into a single string with a new line separator.
	 */
	errors?: string[];
	/** [DOM - `type`](https://html.spec.whatwg.org/multipage/input.html#attr-input-type) */
	type?: InputType;
	/**
	 * A list of validators. A validator contains a function that tests the value
	 * for validity and a corresponding message that conveys why the test failed.
	 */
	validators?: ValidatorEntry[];
	/**
	 * Indicates that validation should occur when the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * callback, which triggers on the DOM's `input` event.
	 *
	 * Reference:
	 * - [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
	 */
	validateOnDOMChange?: boolean;
	/**
	 * Indicates that validation should occur when `onChange` is triggered. Alias
	 * of `validateOnInput`.
	 */
	validateOnChange?: boolean;
	/** Indicates that a `maxLength` value should prevent input beyond the `maxLength`. */
	maxLengthRestrictsInput?: boolean;
	/**
	 * A callback that will be triggered any time the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * event, which triggers on the DOM's `input` event.
	 *
	 * Reference:
	 * - [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
	 * - [MDN - `input event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
	 */
	onDOMChange?: (e: Event) => void;
	/**
	 * A callback that will be triggered any time the input is validated. See
	 * related `validators`, `validateOnChange`, and `validateOnChange`.
	 */
	onValidate?: (errors: string[]) => void;
}

const defaultProps: BaseInputProps = {
	validateOnDOMChange: true,
};

/**
 * A base `<input>` component. Adds a callback for the DOM's `change` event
 * (`onDOMChange`), which does not exist in React.
 */
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>((
	{
		errors: errorsProp,
		validateOnChange,
		validateOnDOMChange = defaultProps.validateOnDOMChange,
		validators,
		// pull out maxLength because it prevents user input past the given
		// length, which is an anti-pattern according to our usage guidelines.
		maxLength,
		maxLengthRestrictsInput = false,
		onInput,
		onDOMChange,
		onValidate,
		...attributes
	}: BaseInputProps, ref,
): React.ReactElement => {
	const [input, setInput] = useForwardedRef(ref);
	const [errors, setErrors] = React.useState(errorsProp);

	// treat the prop version of `errors` as the source of truth
	React.useEffect(() => setErrors(errorsProp), [errorsProp]);

	const validator = useValidation(validators);
	const validate = React.useCallback((el: ValidationElement) => {
		const errs = validator((maxLength) ? { ...el, maxLength } : el);
		if (onValidate) onValidate(errs);
		if (!errorsProp) setErrors(errs);
	}, [validator, onValidate, errorsProp, maxLength]);

	/**
	 * Unlike `onChange`, `onInput` will trigger even when the user enters a bad
	 * value, such as entering a letter in a `type="number"` field, so run
	 * validation here to catch the `ValidityState.badInput` errors.
	 */
	const inputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
		if (onInput) onInput(e);

		if (validateOnChange) validate(e.currentTarget);
	};

	const domChangeHandler = React.useCallback((e: Event): void => {
		if (onDOMChange) onDOMChange(e);
		if (validateOnDOMChange) validate(e.target as HTMLInputElement);
	}, [onDOMChange, validateOnDOMChange, validate]);

	// Reflect errors on the DOM's constraint validation API. This ensures that
	// browser tooltip text always matches the custom errors.
	React.useEffect(() => {
		if (input && input.willValidate) {
			const errString = (!errors || !errors.length) ? '' : errors.join('\n');
			input.setCustomValidity(errString);
		}
	}, [input, errors]);

	// Polyfill the DOM `change` listener
	React.useLayoutEffect(() => {
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
			maxLength={(maxLengthRestrictsInput) ? maxLength : undefined}
			{...attributes}
		/>
	);
});

BaseInput.defaultProps = defaultProps;
