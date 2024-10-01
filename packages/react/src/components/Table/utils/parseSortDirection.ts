import { SortDirection } from '../types';

export function parseSortDirection(direction: 'asc' | 'desc' | undefined): SortDirection {
	switch (direction) {
		case 'asc':
			return SortDirection.ASC;
		case 'desc':
			return SortDirection.DESC;
		default:
			return SortDirection.NONE;
	}
}
