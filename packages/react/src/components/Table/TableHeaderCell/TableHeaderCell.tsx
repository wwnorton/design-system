import React, { useEffect, useMemo } from 'react';
import { useId } from '../../../utilities';
import { TableHeaderCellProps } from '../types';
import { BaseTableHeaderCell } from './BaseTableHeaderCell';
import { useSortingState } from '../ComposableTable/SortingContext';

export const TableHeaderCell = ({ sorter, ...others }: TableHeaderCellProps) => {
	const colId = useId() || '';
	const sortingState = useSortingState();

	useEffect(() => {
		if (sortingState) {
			sortingState.registerHeader({
				colId,
				sorter,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const direction = sortingState?.getDirection(colId);

	const onSort = useMemo(() => {
		if (sortingState) {
			return () => sortingState.onSort(colId);
		}
		return undefined;
	}, [sortingState, colId]);

	return <BaseTableHeaderCell {...others} order={direction} onSort={onSort} />;
};
