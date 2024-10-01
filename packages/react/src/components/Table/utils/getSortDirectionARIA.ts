import { SortDirection } from '../types';

/**
 * Returns the value of `aria-sort` that corresponds to the given `sortDirection`.
 */
export function getSortDirectionARIA(
	direction: SortDirection | undefined,
): 'ascending' | 'descending' | undefined {
	switch (direction) {
		case SortDirection.ASC:
			return 'ascending';
		case SortDirection.DESC:
			return 'descending';
		default:
			return undefined;
	}
}
