import { SortDirection } from '../types';

export function getNextDirection(direction: SortDirection = SortDirection.NONE): SortDirection {
	return (direction + 1) % 3;
}
