import React from 'react';

/** Union of HTML elements that can be validated with this API. */
export type ValidationElement = HTMLInputElement | HTMLTextAreaElement;
/** All ValidityState keys except `valid`. */
export type ValidityStateInvalidKeys = Exclude<keyof ValidityState, 'valid'>;

export type ValidatorError = string | JSX.Element;

/** A validator test and message to use when the validator returns `false`. */
export interface ValidatorEntry {
	/** An optional name for the validator. */
	name?: string;
	/** `true` if the supplied value is valid, `false` if it is invalid. */
	test: (value: string, validity?: ValidityState) => boolean;
	/** An error message for when a form element's value is invalid. */
	message: ValidatorError | ((value: string) => ValidatorError);
}

/**
 * All `<input>` types since the standard DOM library isn't specific.
 * https://html.spec.whatwg.org/multipage/input.html#attr-input-type
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

export const validityStateTest = (
	state: ValidityStateInvalidKeys,
): ValidatorEntry['test'] => (_, validity): boolean => {
	if (validity) return !validity[state];
	return true;
};

/** Message functions that correspond to each invalid key on ValidityState. */
export const stateMessages = {
	// badInput: (): string => '',
	// customError: (): string => '',
	// patternMismatch: (): string => '',
	rangeOverflow: (max: string | number): string => `Please select a value that is no more than ${max}.`,
	rangeUnderflow: (min: string | number): string => `Please select a value that is no less than ${min}.`,
	// stepMismatch: (): string => '',
	tooLong: (maxLength: number): string => `Please use ${maxLength} characters or fewer.`,
	tooShort: (
		value: string,
		minLength: number,
		type?: InputType,
	): string => {
		switch (type) {
			case 'password':
				return `Passwords must be at least ${minLength} characters long.`;
			default:
				return `Please use at least ${minLength} characters. You are currently using ${value.length} characters.`;
		}
	},
	typeMismatch: (type: InputType): string => {
		switch (type) {
			case 'email': return 'Please enter an email address.';
			case 'tel': return 'Please enter a phone number.';
			case 'url': return 'Please enter a URL.';
			case 'number': return 'Please enter a number.';
			default: return '';
		}
	},
	valueMissing: (): string => 'This field is required.',
};

type ValidationAttributeNames =
	| 'max'
	| 'maxLength'
	| 'min'
	| 'minLength'
	| 'pattern'
	| 'required'
	| 'step'
	| 'type';

type HTMLValidationAttributes =
	Pick<React.InputHTMLAttributes<HTMLInputElement>, ValidationAttributeNames>;

/**
 * Attributes that are used in constraint validation.
 * @MDN https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes
 */
export interface ValidationAttributes extends Partial<HTMLValidationAttributes> {
	type?: InputType;
}

// TODO: define the remaining constraint validators
export const defaultValidators = ({
	max,
	maxLength,
	min,
	minLength,
	// pattern,
	required,
	// step,
	type,
}: ValidationAttributes): ValidatorEntry[] => {
	const validators: ValidatorEntry[] = [];
	if (required) {
		validators.push({
			test: validityStateTest('valueMissing'),
			message: stateMessages.valueMissing(),
		});
	}
	if (typeof maxLength === 'number') {
		validators.push({
			test: validityStateTest('tooLong'),
			message: stateMessages.tooLong(maxLength),
		});
	}
	if (typeof minLength === 'number') {
		validators.push({
			test: validityStateTest('tooShort'),
			message: (value) => stateMessages.tooShort(value, minLength, type),
		});
	}
	if (type !== undefined) {
		validators.push({
			test: validityStateTest('typeMismatch'),
			message: stateMessages.typeMismatch(type),
		});
	}
	switch (type) {
		case 'number':
		case 'range':
			if (typeof max === 'number') {
				validators.push({
					test: validityStateTest('rangeOverflow'),
					message: stateMessages.rangeOverflow(max),
				});
			}
			if (typeof min === 'number') {
				validators.push({
					test: validityStateTest('rangeUnderflow'),
					message: stateMessages.rangeUnderflow(min),
				});
			}
			break;
		default:
	}
	return validators;
};
