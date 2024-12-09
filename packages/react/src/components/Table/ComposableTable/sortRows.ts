import { SortableValue, SortDirection } from '../types';
import { defaultSorter } from '../utils/defaultSorter';

interface SortableCell {
	value: SortableValue;
}

interface SortableRowCell {
	order: number;
	cells: SortableCell[];
}

interface SortRowsInput<T extends SortableRowCell> {
	colIdx: number;
	headers: Array<{ sorter?: (a: SortableValue, b: SortableValue) => number }>;
	direction: number;
	rows: T[];
}

export function sortRows<T extends SortableRowCell>({
	colIdx,
	headers,
	direction,
	rows,
}: SortRowsInput<T>): T[] {
	if (direction === SortDirection.NONE) {
		return [...rows].sort((a, b) => a.order - b.order);
	}

	const dirMultiplier = direction === 0 ? -1 : 1;
	const sorter = headers[colIdx].sorter || defaultSorter;

	return [...rows].sort((a, b) => {
		return sorter(a.cells[colIdx].value, b.cells[colIdx].value) * dirMultiplier;
	});
}
