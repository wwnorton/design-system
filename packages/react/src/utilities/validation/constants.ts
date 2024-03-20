import {
	StateMessageFunction,
	ValidationAttributes,
	ValidatorEntry,
	ValidityStateInvalidKeys,
} from './types';

/* eslint-disable no-control-regex */
/**
 * A custom regex test for email.
 * Source: [Stack Overflow](https://stackoverflow.com/a/201378).
 */
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/* eslint-enable no-control-regex */

export const validityStateTest =
	(state: ValidityStateInvalidKeys): ValidatorEntry['test'] =>
	(_, validity): boolean => {
		if (validity) return !validity[state];
		return true;
	};

/** Message functions that correspond to each invalid key on ValidityState. */
export const defaultMessages: Record<
	Exclude<ValidityStateInvalidKeys, 'customError'>,
	StateMessageFunction
> = {
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
			case 'email':
				return 'Please enter an email address.';
			case 'tel':
				return 'Please enter a phone number.';
			case 'url':
				return 'Please enter a URL.';
			case 'number':
				return 'Please enter a number.';
			default:
				return '';
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
			test:
				type === 'email' ? (value) => emailRegex.test(value) : validityStateTest('typeMismatch'),
			message: 'Please enter an email address.',
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
export const createValidator =
	(validators?: ValidatorEntry[], useDefaultValidators = true) =>
	(el: ValidationAttributes & { value: string; validity: ValidityState }): string[] => {
		if ((!validators || !validators.length) && !useDefaultValidators) return [];
		const { value, validity } = el;
		const val = value.toString();
		const err = new Set<string>();
		[...(useDefaultValidators ? defaultValidators(el) : []), ...(validators || [])].forEach(
			({ message, test }) => {
				// ensure that the message is a string
				const msg = typeof message === 'function' ? message(val) : message;
				// evaluate the test and add the error message if it exists
				if (!test(val, validity) && message !== '') {
					err.add(msg);
				}
			},
		);
		return Array.from(err);
	};
