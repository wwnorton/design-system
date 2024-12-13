import { SortDirection } from '../types';

export function formatSortDirection(
	direction: SortDirection | undefined,
): 'asc' | 'desc' | undefined {
	switch (direction) {
		case SortDirection.ASC:
			return 'asc';
		case SortDirection.DESC:
			return 'desc';
		default:
			return undefined;
	}
}
