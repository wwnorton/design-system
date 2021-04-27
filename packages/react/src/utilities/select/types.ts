export type SelectValue = string | number;

export interface UseSelectReturn {
	/** An array of selected choices. */
	selected: SelectValue[];
	/** A function that will deselect the given value. */
	deselect: (value: SelectValue) => void;
	/** A function that will select the given value. */
	select: (value: SelectValue) => void;
	/** Toggle a value between selected and unselected. */
	toggle: (value: SelectValue) => void;
	/**
	 * An handler for form elements that will update the `selected` array when
	 * the form element's `checked` state changes. This can be used either
	 * directly on an `<input type="checkbox|radio">` or on a `<fieldset>` that
	 * contains checkboxes or radio inputs.
	 */
	formChangeHandler: React.FormEventHandler<HTMLInputElement | HTMLFieldSetElement>;
}
