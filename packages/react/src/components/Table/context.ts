import React, { useState, ChangeEvent } from "react";
import { Choices, TableState } from "./types";

export const TableContext = React.createContext<TableState | undefined>(
	undefined
);

export function useTableState() {
	const result = React.useContext(TableContext);
	if (!result) {
		throw new Error("TableContext not initialized");
	}

	return result;
}

export function useInitTableState({
	selectable,
	onSelect,
	selected,
}: TableState): TableState {
	const [choices, setChoices] = useState<Choices>(selected || {});

	const onSelectedAll = (event: ChangeEvent<HTMLInputElement>) => {
		setChoices((old: Choices) => ({
			...old,
			...Object.fromEntries(Object.entries(old).map(([key]) => [key, event.target.checked])),
		}));
	};
	const onSelected = (id: string, checked: boolean) => {
		setChoices((old: Choices) => ({ ...old, [id]: checked, }));
		onSelect?.(event);
	};
const isSelected = (key:string):boolean => (choices && choices[key]);
const isSelectedAll = ():boolean => (choices && Object.values(choices).every(value => value === true));

	const registerId = (key: string, value: boolean = false) => {
		setChoices((old: Choices) => ({ ...old, [key]: value, }));
	};
	return {
		selectable,
		onSelect,
		selected: choices,
		onSelected,
		onSelectedAll,
		isSelected,
		isSelectedAll,
		registerId,
	};
}
