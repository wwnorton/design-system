import React, { forwardRef, useCallback, useMemo } from 'react';
import { DataTableProps } from './types';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { BaseDataTable } from './BaseDataTable';
import { XSSortControls, XSSortControlsProps } from '../XSSortControls/XSSortControls';
import { parseSortDirection } from '../utils/parseSortDirection';
import { formatSortDirection } from '../utils/formatSortDirection';

export type ControlledSortableDataTableProps = Omit<DataTableProps, 'onSort'> &
	Required<Pick<DataTableProps, 'onSort'>>;

export const ControlledSortableDataTable = forwardRef<
	HTMLTableElement,
	ControlledSortableDataTableProps
>(({ data, onSort, ...tableProps }, ref) => {
	const headers = useMemo(() => {
		return data.headers.map((header, index) => {
			const currentDirection = parseSortDirection(header.sorted);
			const newDirection = (currentDirection + 1) % 3;
			return (
				<BaseTableHeaderCell
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					order={currentDirection}
					onSort={() => onSort(index, formatSortDirection(newDirection))}
				>
					{header.children}
				</BaseTableHeaderCell>
			);
		});
	}, [data.headers, onSort]);

	const handleXSSortChange: XSSortControlsProps['onChange'] = useCallback(
		(colIdx, direction) => {
			onSort(colIdx, formatSortDirection(direction));
		},
		[onSort],
	);

	const xsOptions: XSSortControlsProps['options'] = useMemo(() => {
		return data.headers.map((h) => h.children);
	}, [data.headers]);

	return (
		<>
			<XSSortControls onChange={handleXSSortChange} options={xsOptions} />
			<BaseDataTable
				ref={ref}
				headersData={data.headers}
				rowsData={data.rows}
				headers={headers}
				{...tableProps}
			/>
		</>
	);
});
