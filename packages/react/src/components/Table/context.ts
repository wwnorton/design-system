import React, { useMemo, useState } from 'react';

export interface TableState {
	selectable?: boolean;
	onSelect?: () => void;
}

export const TableContext = React.createContext<TableState | undefined>(undefined);

export function useTableState() {
	const result = React.useContext(TableContext);
	if (!result) {
		throw new Error('TableContext not initialized');
	}

	return result;
}

export function useInitTableState({ selectable }: TableState): TableState {
	// TODO: should we do something with onSelect here?
	const [innerSelectable, setSelectable] = useState(selectable);

	return useMemo(
		() => ({
			selectable: innerSelectable,
			setSelectable,
		}),
		[innerSelectable],
	);
}
