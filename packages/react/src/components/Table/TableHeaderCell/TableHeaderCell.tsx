import React, { useEffect, useMemo, useRef } from 'react';
import { useId } from '../../../utilities';
import { TableHeaderCellProps } from '../types';
import { BaseTableHeaderCell } from './BaseTableHeaderCell';
import { useSortingState } from '../ComposableTable/SortingContext';
import { useRegisterHeader } from '../ComposableTable/HeadersContext';
import { useControlledOnSort } from '../ComposableTable/ControlledSortingContext';
import { parseSortDirection } from '../utils/parseSortDirection';
import { getNextDirection } from '../utils/getNextDirection';

export const TableHeaderCell = ({ sorter, children, sorted, ...others }: TableHeaderCellProps) => {
	const colId = useId() || '';
	const sortingState = useSortingState();

	const ref = useRef<HTMLTableCellElement>(null);
	useRegisterHeader(colId, ref);

	useEffect(() => {
		if (sortingState) {
			sortingState.registerHeader({
				colId,
				sorter,
			});
		}
		// When there's a sorting state, `registerHeader` doesn't change during the
		// lifetime of the table. And the sorting state is resolved before mounting
		// this component, so let's exhaustive-deps to prevent unneeded registers.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const controlledOnSort = useControlledOnSort();

	const sortDirection = useMemo(() => {
		if (controlledOnSort) {
			return parseSortDirection(sorted);
		}
		return sortingState?.getDirection(colId);
	}, [controlledOnSort, sortingState, colId, sorted]);

	const onSort = useMemo(() => {
		if (controlledOnSort) {
			return () => controlledOnSort(colId, getNextDirection(sortDirection));
		}
		if (sortingState) {
			return () => sortingState.onSort(colId);
		}
		return undefined;
	}, [controlledOnSort, sortingState, colId, sortDirection]);

	return (
		<BaseTableHeaderCell ref={ref} {...others} order={sortDirection} onSort={onSort}>
			{children}
		</BaseTableHeaderCell>
	);
};
