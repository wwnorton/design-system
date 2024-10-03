import React, { useEffect, useRef } from 'react';
import { BaseTableCell } from './BaseTableCell';
import { TableCellProps } from '../types';
import { SortingCellData, useSortingState } from '../ComposableTable/SortingContext';

export const TableCell = ({ value, ...others }: TableCellProps) => {
	const cellRef = useRef<HTMLTableCellElement>(null);

	const sortingState = useSortingState();
	const sortingData = useRef<SortingCellData>({
		value: value || '',
	});

	useEffect(() => {
		if (sortingState) {
			if (!value) {
				sortingData.current.value = cellRef.current?.textContent || '';
			}
			sortingState.registerCell(sortingData.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <BaseTableCell ref={cellRef} {...others} />;
};
