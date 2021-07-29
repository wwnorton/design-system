import React from 'react';
import {
	useForwardedRef,
	useValidation,
} from '../../utilities';
import { BaseTextAreaProps } from './types';

const defaultProps: BaseTextAreaProps = {
	validateOnDOMChange: true,
};

/**
 * A base `<textarea>` component. Adds a callback for the DOM's `change` event
 * (`onDOMChange`), which does not exist in React.
 */
export const BaseTextArea = React.forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
	(
		{
			multiline = false,
			autoSize = false,
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
		}: BaseTextAreaProps,
		ref,
	): React.ReactElement => {
		const [input, setInput] = useForwardedRef(ref);
		const [errors, setErrors] = React.useState(errorsProp);
		const lines = Number(multiline) > 0 ? Number(multiline) : 1;

		// treat the prop version of `errors` as the source of truth
		React.useEffect(() => setErrors(errorsProp), [errorsProp]);
		const validator = useValidation(validators);
		const validate = React.useCallback(
			({
				maxLength: elMaxLength,
				minLength,
				required,
				type,
				value,
				validity,
			}: HTMLTextAreaElement) => {
				const errs = validator({
					maxLength: maxLength || elMaxLength,
					minLength,
					required,
					type,
					value,
					validity,
				});
				if (onValidate) onValidate(errs);
				if (!errorsProp) setErrors(errs);
			},
			[validator, onValidate, errorsProp, maxLength],
		);

		// Handles auto sizing with multiline component
		React.useEffect(() => {
			if (autoSize && input) input.style.height = 'auto';
		}, [autoSize, input]);

		const onResize = () => {
			if (input) {
				input.style.height = 'auto';
				input.style.height = `${input.scrollHeight}px`;
			}
		};

		/**
		 * Unlike `onChange`, `onInput` will trigger even when the user enters a bad
		 * value, such as entering a letter in a `type="number"` field, so run
		 * validation here to catch the `ValidityState.badInput` errors.
		 */
		const inputHandler = (
			e: React.FormEvent<HTMLTextAreaElement>,
		): void => {
			if (onInput) onInput(e);
			if (autoSize) onResize();
			if (validateOnChange) validate(e.currentTarget);
		};

		const domChangeHandler = React.useCallback(
			(e: Event): void => {
				if (onDOMChange) onDOMChange(e);
				if (validateOnDOMChange) validate(e.target as HTMLTextAreaElement);
			}, [onDOMChange, validateOnDOMChange, validate],
		);

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
			<textarea
				ref={setInput}
				rows={lines}
				onInput={inputHandler}
				maxLength={maxLengthRestrictsInput ? maxLength : undefined}
				{...attributes}
			/>
		);
	},
);

BaseTextArea.defaultProps = defaultProps;
