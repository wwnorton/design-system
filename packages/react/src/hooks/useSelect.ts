import {
	useCallback, useEffect, useMemo, useRef, useState,
	ReactText, Dispatch, SetStateAction, ChangeEvent,
} from 'react';
import isEqual from 'react-fast-compare';

/**
 * Stateful select hook, which returns a "currently selected" array, a setter for
 * that array, and an `<input>` change handler to use `onChange`. To control
 * selection, pass a `selected` prop. To make the selection multi-select, set
 * the `multiple` prop to `true`.
 */
export const useSelect = ({
	selected,
	multiple = false,
}: {
	selected?: ReactText[] | ReactText;
	multiple?: boolean,
}): {
		selected: ReactText[];
		setSelected: Dispatch<SetStateAction<ReactText[]>>;
		onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	} => {
	// coerce the selected prop value into an array
	const propSelected = useMemo(() => {
		if (Array.isArray(selected)) return selected;
		if (selected !== undefined) return [selected];
		return [];
	}, [selected]);

	// initialize our ref with the initialSelected value
	const prevSelected = useRef(propSelected);
	const [stateSelected, setSelected] = useState(propSelected);

	useEffect(() => {
		if (!isEqual(prevSelected.current, propSelected)) setSelected(propSelected);
	}, [propSelected]);

	useEffect(() => {
		prevSelected.current = stateSelected;
	}, [stateSelected]);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;
		let newSelected: ReactText[];
		if (multiple) {
			newSelected = prevSelected.current.slice();
			const currentIndex = newSelected.indexOf(value);
			if (currentIndex > -1) {
				newSelected.splice(currentIndex, 1);
			} else {
				newSelected.push(value);
			}
		} else {
			newSelected = [value];
		}
		setSelected(newSelected);
	}, [multiple]);

	return { selected: stateSelected, setSelected, onChange };
};
