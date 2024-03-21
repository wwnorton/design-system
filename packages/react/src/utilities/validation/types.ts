/** Union of HTML elements that can be validated with this API. */
export type ValidationElement = HTMLInputElement | HTMLTextAreaElement;
/** All ValidityState keys except `valid`. */
export type ValidityStateInvalidKeys = Exclude<keyof ValidityState, 'valid'>;

/** A validator test and message to use when the validator returns `false`. */
export interface ValidatorEntry {
	/** An optional name for the validator. */
	name?: string;
	/** `true` if the supplied value is valid, `false` if it is invalid. */
	test: (value: string, validity?: ValidityState) => boolean;
	/** An error message for when a form element's value is invalid. */
	message: string | ((value: string) => string);
}

/**
 * All `<input>` types since the standard DOM library isn't specific.
 *
 * Reference:
 * - [DOM - `input[type]`](https://html.spec.whatwg.org/multipage/input.html#attr-input-type)
 */
export type InputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

type ValidationAttributeNames =
	| 'max'
	| 'maxLength'
	| 'min'
	| 'minLength'
	| 'pattern'
	| 'required'
	| 'step'
	| 'type';

/**
 * Attributes that are used in constraint validation.
 *
 * Reference:
 * [MDN - Validation-related attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes).
 */
export type ValidationAttributes = Pick<
	React.ComponentPropsWithoutRef<'input'>,
	ValidationAttributeNames
>;

export type StateMessageFunction = (attrs: ValidationAttributes, value?: string) => string;
