import { useState } from 'react';
import { UseSelectProps, UseSelectReturn } from './types';

/**
 * Create a stateful `selected` array, a function to update it, and a handler to
 * update it from DOM events on either an `<input>` of `type="checkbox|radio" or
 * a `<fieldset>` containing checkboxes or radios.
 */
export const useSelect = ({
	initialValue = [],
	multiple = false,
}: UseSelectProps = {}): UseSelectReturn => {
	const [selected, setSelected] = useState<string[]>(initialValue);

	return {
		changeHandler: (e) => {
			const { checked, value } = e.target as HTMLInputElement;
			if (!value) {
				throw new Error('The value prop is required.');
			}
			if (checked) {
				setSelected(
					(multiple) ? [...selected, value] : [value],
				);
			} else {
				setSelected(selected.filter((v) => v !== value));
			}
		},
		selected,
		setSelected: (s) => {
			setSelected((Array.isArray(s)) ? s : [s]);
		},
	};
};
