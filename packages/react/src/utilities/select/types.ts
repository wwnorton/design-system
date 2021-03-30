export interface UseSelectProps {
	initialValue?: string[];
	multiple?: boolean;
}

export interface UseSelectReturn {
	/**
	 * An `onChange` handler that will update the `selected` array. This callback
	 * can be used on either an `<input type="checkbox|radio">` or a `<fieldset>`
	 * that contains checkboxes or radio inputs.
	 */
	changeHandler: React.FormEventHandler<HTMLInputElement | HTMLFieldSetElement>;
	/** An array of selected choices. */
	selected: string[];
	/** A function to update the selected array. */
	setSelected: (selected: string | string[]) => void;
}
