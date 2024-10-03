import React, { useEffect, useRef } from 'react';
import { BaseTableCell } from './BaseTableCell';
import { TableCellProps } from '../types';
import { SortingCellData, useSortingState } from '../ComposableTable/SortingContext';

export const TableCell = ({ value = 0, ...others }: TableCellProps) => {
	const sortingState = useSortingState();
	const sortingData = useRef<SortingCellData>({
		value,
	});

	useEffect(() => {
		if (sortingState) {
			sortingState.registerCell(sortingData.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <BaseTableCell {...others} />;
};
