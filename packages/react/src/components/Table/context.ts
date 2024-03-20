import React, { useState } from "react";
import { TableState } from "./types";

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
	const [isSelectedAll, setIsSelectedAll] = React.useState<boolean>(false);
	const [uniqueIds, setUniqueIds] = useState<Set<string>>(
		new Set(selected || [])
	);

	const onSelectedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsSelectedAll(event.target.checked || false);
		onSelected(event);
	};
	const onSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSet = new Set(uniqueIds); // Create a copy to avoid mutation
		if (event.target.checked) {
			newSet.add(event.target.id);
		} else {
			newSet.delete(event.target.id);
		}
		setUniqueIds(newSet);
		onSelect?.([...newSet]);
	};
	return {
		selectable,
		onSelect,
		selected: [...uniqueIds],
		onSelected,
		onSelectedAll,
		isSelectedAll,
	};
}
