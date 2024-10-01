import { SortableValue } from '../types';
import { defaultSorter } from '../utils/defaultSorter';

type SortableRowCell = Array<{ value: SortableValue }>;

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
	const dirMultiplier = direction === 0 ? -1 : 1;
	const sorter = headers[colIdx].sorter || defaultSorter;

	return [...rows].sort((a, b) => {
		return sorter(a[colIdx].value, b[colIdx].value) * dirMultiplier;
	});
}
