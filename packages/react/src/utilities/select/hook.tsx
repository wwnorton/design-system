import { useEffect, useState } from 'react';
import { SelectValue, UseSelectReturn } from './types';

/**
 * Create a stateful `selected` array, functions to update it, and a handler to
 * update it from DOM events on either an `<input>` of `type="checkbox|radio"`
 * or a `<fieldset>` containing checkboxes or radios.
 */
export const useSelect = (
	/** When `true`, selecting a new option will add it to the list. */
	multiple = false,
	/** The initial value of the selected array. */
	defaultSelected: SelectValue[] = [],
): UseSelectReturn => {
	const [selected, setSelected] = useState(defaultSelected);

	useEffect(() => {
		if (!multiple && selected.length > 1) {
			throw new Error(useSelect.SELECT_OVERLOAD);
		}
	}, [multiple, selected]);

	const select = (value: string | number): void => {
		setSelected(
			(multiple) ? [...selected, value] : [value],
		);
	};

	const deselect = (value: string | number): void => {
		setSelected(selected.filter((v) => v !== value));
	};

	return {
		selected,
		deselect,
		select,
		toggle: (value) => {
			if (!selected.includes(value)) select(value);
			else if (multiple) deselect(value);
		},
		formChangeHandler: ({ currentTarget, target }) => {
			const { checked, value } = (('value' in currentTarget) && ('checked' in currentTarget))
				? currentTarget as HTMLInputElement
				: target as HTMLInputElement;
			if (checked !== undefined || !value) {
				if (checked) {
					select(value);
				} else {
					deselect(value);
				}
			} else {
				throw new Error(
					'formChangeHandler is being attached to an invalid element. '
					+ 'Attach it to an <input type="checkbox|radio"> or a <fieldset>.',
				);
			}
		},
	};
};

useSelect.SELECT_OVERLOAD = 'The number of selected values cannot exceed 1 when not multi-selectable.';
