import { useMemo } from 'react';
import { ValidatorEntry, createValidator } from '../utilities';

/**
 * Creates a stateful validation function from a list of optional validation
 * entries (test and message). Default validators are included unless the second
 * parameter is `false`.
 */
export const useValidation = (
	validator?: ValidatorEntry[] | ValidatorEntry,
	useDefaults = true,
): ReturnType<typeof createValidator> => {
	const validators = useMemo(() => {
		if (!validator) return undefined;
		return (Array.isArray(validator)) ? validator : [validator];
	}, [validator]);

	return createValidator(validators, useDefaults);
};
