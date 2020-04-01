import React from 'react';
import {
	createValidator, InputType, ValidatorEntry, ValidatorError,
} from '../../utilities/validation';
import { useForwardedRef } from '../../utilities/hooks';

export interface ValidationState {
	errors: ValidatorError[];
	validity?: ValidityState;
}

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Indicates that the default browser tooltips should be disabled for
	 * validation errors. Disabling tooltips will not disable the DOM's
	 * constraint validation to ensure that `:valid` and `:invalid` pseudo-
	 * classes are still correct.
	 * @DOM https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
	*/
	disableTooltip?: boolean;
	/**
	 * A callback that will be triggered any time the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * event, which triggers on the DOM's `input` event.
	 * @MDN https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
	 * @MDN https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
	 */
	onDOMChange?: (e: Event) => void;
	/** A callback that will be triggered any time the input is validated. */
	onValidate?: (state: ValidationState) => void;
	/** A list of validator function and corresponding error message pairs. */
	validators?: ValidatorEntry[];
	/**
	 * Indicates that validation should occur when the DOM's `change` event is
	 * triggered. Note that this event is different from React's `onChange`
	 * callback, which triggers on the DOM's `input` event.
	 * @MDN https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
	 */
	validateOnDOMChange?: boolean;
	/**
	 * Indicates that validation should occur when `onChange` is triggered.
	 * @alias `validateOnInput`
	 */
	validateOnChange?: boolean;
	/**
	 * Indicates that validation should occur when `onInput` is triggered.
	 * @alias `validateOnChange`
	 */
	validateOnInput?: boolean;
	/** @DOM https://html.spec.whatwg.org/multipage/input.html#attr-input-type */
	type?: InputType;
}

export const BaseInputRender: React.ForwardRefRenderFunction<HTMLInputElement, BaseInputProps> = (
	{
		onDOMChange,
		onChange,
		onValidate,
		validators = [],
		validateOnDOMChange = true,
		validateOnChange = false,
		validateOnInput = false,
		disableTooltip = false,
		value,
		...attributes
	}: BaseInputProps,
	ref,
): React.ReactElement => {
	const inputRef = useForwardedRef(ref);
	// TODO: move all of this into a standalone hook so it can be used with BaseTextarea
	const [validity, setValidity] = React.useState<ValidityState>();
	const validate = React.useRef(createValidator(validators));
	const changeNativeListener = React.useRef<(e: Event) => void>();

	// validation effect
	React.useEffect(() => {
		let errors: ValidatorError[] = [];
		if (onValidate && validity) {
			errors = validate.current({ validity, value });
			if (inputRef.current) {
				if (errors.length) {
					if (disableTooltip) {
						inputRef.current.setCustomValidity(' ');
					} else {
						inputRef.current.setCustomValidity((errors.length) ? errors.join('\n') : '');
					}
				} else {
					inputRef.current.setCustomValidity('');
				}
			}
			onValidate({ errors, validity });
		}
		return (): void => setValidity(undefined);
	}, [disableTooltip, inputRef, onValidate, validity, value]);

	// update the validator function
	React.useEffect(() => {
		validate.current = createValidator(validators);
	}, [validators]);

	// update the DOM `change` listener
	React.useEffect(() => {
		changeNativeListener.current = (e: Event): void => {
			const target = e.target as HTMLInputElement;
			if (validateOnDOMChange) setValidity(target.validity);
			if (onDOMChange) onDOMChange(e);
		};
	}, [onDOMChange, validateOnDOMChange]);

	// attach the DOM `change` listener
	React.useEffect(() => {
		if (inputRef.current && changeNativeListener.current) {
			inputRef.current.addEventListener('change', changeNativeListener.current);
		}
	}, [inputRef]);

	const changeListener = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (validateOnChange || validateOnInput) setValidity(e.target.validity);
		if (onChange) onChange(e);
	};

	return (
		<input
			value={value}
			onChange={changeListener}
			ref={inputRef}
			{...attributes}
		/>
	);
};

export default React.forwardRef<HTMLInputElement, BaseInputProps>(BaseInputRender);
