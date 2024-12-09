import { SortableValue } from '../types';

/**
 * The default sorter function used to sort the rows of a table if none is specified.
 */
export function defaultSorter(a: SortableValue, b: SortableValue): number {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}
