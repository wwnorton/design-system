import React, { useEffect, useRef } from 'react';
import { TableHeaderCellProps } from '../types';
import { BaseTableHeaderCell } from './BaseTableHeaderCell';
import { SortingHeaderData, useSortingState } from '../ComposableTable/SortingContext';

export const TableHeaderCell = ({ sorter, ...others }: TableHeaderCellProps) => {
	const sortingState = useSortingState();

	const headerRef = useRef<SortingHeaderData>({
		sorter,
	});

	useEffect(() => {
		if (sortingState) {
			sortingState.registerHeader(headerRef.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <BaseTableHeaderCell {...others} />;
};
