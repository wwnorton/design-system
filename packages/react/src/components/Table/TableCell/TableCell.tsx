import React, { useEffect, useRef, useState } from 'react';
import { BaseTableCell } from './BaseTableCell';
import { SortingCellData, useSortingState } from '../ComposableTable/SortingContext';
import { TableCellProps } from '../types';
import { useHeaderContent } from '../ComposableTable/HeadersContext';

function getSiblingIndex(el: HTMLElement): number {
	return Array.from(el.parentElement!.children).indexOf(el);
}

export const TableCell = ({ value, ...others }: TableCellProps) => {
	const cellRef = useRef<HTMLTableCellElement>(null);

	const sortingState = useSortingState();
	const sortingData = useRef<SortingCellData>({
		value: value === undefined ? '' : value,
	});

	useEffect(() => {
		if (sortingState) {
			if (sortingData.current.value === '') {
				sortingData.current.value = cellRef.current?.textContent || '';
			}
			sortingState.registerCell(sortingData.current);
		}
		// We want to register the cell value only on mount, we don't care if the sorting
		// state changes down the road.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [colIdx, setColIdx] = useState(-1);
	let header: React.ReactNode | null = useHeaderContent(colIdx);
	if (colIdx === 0) {
		header = null;
	}

	useEffect(() => {
		if (cellRef.current) {
			setColIdx(getSiblingIndex(cellRef.current));
		}
	}, []);

	return <BaseTableCell ref={cellRef} header={header} {...others} />;
};
