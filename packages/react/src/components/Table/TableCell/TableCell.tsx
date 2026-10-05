import React, { useEffect, useRef, useState } from 'react';
import { BaseTableCell } from './BaseTableCell';
import { SortingCellData, useSortingState } from '../ComposableTable/SortingContext';
import { TableCellProps } from '../types';
import { useHeader } from '../ComposableTable/HeadersContext';

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
	const header = useHeader(colIdx);
	let headerContent = header?.content;
	let headerSuffix = header?.suffix;
	if (colIdx === 0) {
		headerContent = null;
		headerSuffix = null;
	}

	useEffect(() => {
		if (cellRef.current) {
			setColIdx(getSiblingIndex(cellRef.current));
		}
	}, []);

	return (
		<BaseTableCell
			{...others}
			ref={cellRef}
			headerContent={headerContent}
			headerSuffix={headerSuffix}
		/>
	);
};
