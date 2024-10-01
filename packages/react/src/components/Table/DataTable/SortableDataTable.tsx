import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { SortDirection, TableData } from '../types';
import { BaseDataTable } from './BaseDataTable';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { DataTableProps } from './types';
import { XSSortControls, XSSortControlsProps } from '../XSSortControls/XSSortControls';
import { sortRows } from './sortRows';

type SortState = {
	order: SortDirection;

	/**
	 * The index of the column sorted
	 */
	index: number;

	rows: TableData['rows'];
};

export const SortableDataTable = forwardRef<HTMLTableElement, DataTableProps>(
	({ data, ...tableProps }, ref) => {
		const [sortState, setSortState] = useState<SortState>({
			order: 1,
			index: 0,
			rows: data.rows,
		});

		const onSort = useCallback(
			(idx: number) => {
				setSortState((prevState) => {
					let newOrder = 2;
					if (idx === prevState.index) {
						newOrder = (prevState.order + 1) % 3;
					}

					if (newOrder === 1) {
						return {
							order: newOrder,
							index: idx,
							rows: data.rows,
						};
					}

					return {
						order: newOrder,
						index: idx,
						rows: sortRows({
							colIdx: idx,
							rows: data.rows,
							headers: data.headers,
							direction: newOrder,
						}),
					};
				});
			},
			[data],
		);

		const headers = useMemo(() => {
			return data.headers.map((header, index) => (
				<BaseTableHeaderCell
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					order={sortState.index === index ? sortState.order : 1}
					onSort={() => onSort(index)}
				>
					{header.children}
				</BaseTableHeaderCell>
			));
		}, [data.headers, onSort, sortState.index, sortState.order]);

		const headersContent = useMemo(() => {
			return data.headers.map((h) => h.children);
		}, [data.headers]);

		const handleXSControl: XSSortControlsProps['onChange'] = useCallback(
			(colId, direction) => {
				setSortState({
					order: direction,
					index: colId,
					rows: sortRows({
						colIdx: colId,
						rows: data.rows,
						headers: data.headers,
						direction,
					}),
				});
			},
			[data.headers, data.rows],
		);

		return (
			<>
				<XSSortControls onChange={handleXSControl} options={headersContent} />
				<BaseDataTable
					ref={ref}
					headersData={data.headers}
					rowsData={sortState.rows}
					headers={headers}
					{...tableProps}
				/>
			</>
		);
	},
);
