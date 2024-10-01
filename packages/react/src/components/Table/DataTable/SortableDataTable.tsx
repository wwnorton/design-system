import React, { useCallback, useMemo, useState } from 'react';
import { SortableValue, TableData } from '../types';
import { BaseDataTable } from './BaseDataTable';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { DataTableProps } from './types';

type SortState = {
	/**
	 * 0 - descending, 1 - default, 2 - ascending
	 */
	order: number;

	/**
	 * The index of the column sorted
	 */
	index: number;

	rows: TableData['rows'];
};

function defaultSorter(a: SortableValue, b: SortableValue): number {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}

export const SortableDataTable = ({ data, ...tableProps }: DataTableProps) => {
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

				const direction = newOrder === 0 ? -1 : 1;
				const sorter = data.headers[idx].sorter || defaultSorter;

				const newRows = data.rows.toSorted((a, b) => {
					return sorter(a[idx].value, b[idx].value) * direction;
				});

				return {
					order: newOrder,
					index: idx,
					rows: newRows,
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

	return (
		<BaseDataTable
			headersData={data.headers}
			rowsData={sortState.rows}
			headers={headers}
			{...tableProps}
		/>
	);
};
