import { useCallback } from 'react';

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

export const validityStateTest = (
	state: ValidityStateInvalidKeys,
): ValidatorEntry['test'] => (_, validity): boolean => {
	if (validity) return !validity[state];
	return true;
};

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
 * - [MDN - Validation-related attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes)
 */
export type ValidationAttributes =
	Pick<React.InputHTMLAttributes<HTMLInputElement>, ValidationAttributeNames>;

type StateMessageFunction = (attrs: ValidationAttributes, value?: string) => string;

/* eslint-disable no-control-regex */
/**
 * A custom regex for email.
 * Source: [Stack Overflow](https://stackoverflow.com/a/201378).
 */
export const emailTypeMismatch = (value: string): boolean => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
/* eslint-enable no-control-regex */

/** Message functions that correspond to each invalid key on ValidityState. */
export const defaultMessages: Record<Exclude<ValidityStateInvalidKeys, 'customError'>, StateMessageFunction> = {
	/**
	 * Use the typeMisMatch messages for badInput for the time being. This is
	 * probably okay since it only really occurs when entering letters in a
	 * number field.
	 */
	badInput: ({ type }) => defaultMessages.typeMismatch({ type }),
	patternMismatch: () => '',
	rangeOverflow: ({ max }) => `Please select a value that is no more than ${max}.`,
	rangeUnderflow: ({ min }) => `Please select a value that is no less than ${min}.`,
	stepMismatch: () => '',
	tooLong: ({ maxLength }) => `Please use ${maxLength} characters or fewer.`,
	tooShort: ({ minLength, type }) => {
		switch (type) {
			case 'password':
				return `Passwords must be at least ${minLength} characters long.`;
			default:
				return `Please use at least ${minLength} characters.`;
		}
	},
	typeMismatch: ({ type }) => {
		switch (type) {
			case 'email': return 'Please enter an email address.';
			case 'tel': return 'Please enter a phone number.';
			case 'url': return 'Please enter a URL.';
			case 'number': return 'Please enter a number.';
			default: return '';
		}
	},
	valueMissing: () => 'This field is required.',
};

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
			name: 'valueMissing',
			test: validityStateTest('valueMissing'),
			message: defaultMessages.valueMissing({}),
		});
	}
	if (maxLength && maxLength >= 0) {
		validators.push({
			name: 'tooLong',
			test: validityStateTest('tooLong'),
			message: defaultMessages.tooLong({ maxLength }),
		});
		validators.push({
			name: 'tooLong',
			test: (value) => value.length <= maxLength,
			message: defaultMessages.tooLong({ maxLength }),
		});
	}
	if (minLength && minLength >= 0) {
		validators.push({
			name: 'tooShort',
			test: validityStateTest('tooShort'),
			message: () => defaultMessages.tooShort({ minLength, type }),
		});
	}
	if (type !== undefined) {
		validators.push({
			name: 'typeMismatch',
			test: (type === 'email') ? emailTypeMismatch : validityStateTest('typeMismatch'),
			message: defaultMessages.typeMismatch({ type }),
		});
		validators.push({
			test: validityStateTest('badInput'),
			message: defaultMessages.typeMismatch({ type }),
		});
	}
	switch (type) {
		case 'number':
		case 'range':
			if (max) {
				validators.push({
					name: 'rangeOverflow',
					test: validityStateTest('rangeOverflow'),
					message: defaultMessages.rangeOverflow({ max }),
				});
			}
			if (min) {
				validators.push({
					name: 'rangeUnderflow',
					test: validityStateTest('rangeUnderflow'),
					message: defaultMessages.rangeUnderflow({ min }),
				});
			}
			break;
		default:
	}
	return validators;
};

/**
 * Create a validator function from a list of validator entries. The resulting
 * function will return a list of errors based on the current state of the DOM
 * element that is being validated.
 */
export const createValidator = (
	validators?: ValidatorEntry[],
	useDefaultValidators = true,
) => (el: ValidationElement): string[] => {
	if ((!validators || !validators.length) && !useDefaultValidators) return [];
	const { value, validity } = el;
	const val = value.toString();
	const err = new Set<string>();
	[
		...((useDefaultValidators) ? defaultValidators(el) : []),
		...(validators || []),
	].forEach(({ message, test }) => {
		// ensure that the message is a string
		const msg = (typeof message === 'function') ? message(val) : message;
		// evaluate the test and add the error message if it exists
		if (!test(val, validity) && message !== '') {
			err.add(msg);
		}
	});
	return Array.from(err);
};

/**
 * Creates a stateful validation function from a list of optional validation
 * entries (test and message). Default validators are included unless the second
 * parameter is `false`.
 */
export const useValidation = (
	validators?: ValidatorEntry[],
	useDefaults = true,
): ReturnType<typeof createValidator> => useCallback(
	createValidator(validators, useDefaults),
	[validators, useDefaults],
);
