import React, { useMemo } from 'react';
import { DataTableProps } from './types';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { BaseDataTable } from './BaseDataTable';

type Direction = 'asc' | 'desc' | undefined;

function getDirection(direction: Direction): number {
	switch (direction) {
		case 'asc':
			return 2;
		case 'desc':
			return 0;
		default:
			return 1;
	}
}

function toDirection(number: number): Direction {
	switch (number) {
		case 2:
			return 'asc';
		case 0:
			return 'desc';
		default:
			return undefined;
	}
}

export type ControlledSortableDataTableProps = Omit<DataTableProps, 'onSort'> &
	Required<Pick<DataTableProps, 'onSort'>>;

export const ControlledSortableDataTable = ({
	data,
	onSort,
	...tableProps
}: ControlledSortableDataTableProps) => {
	const headers = useMemo(() => {
		return data.headers.map((header, index) => {
			const currentDirection = getDirection(header.sorted);
			const newDirection = (currentDirection + 1) % 3;
			return (
				<BaseTableHeaderCell
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					order={currentDirection}
					onSort={() => onSort(index, toDirection(newDirection))}
				>
					{header.children}
				</BaseTableHeaderCell>
			);
		});
	}, [data.headers, onSort]);

	return (
		<BaseDataTable
			headersData={data.headers}
			rowsData={data.rows}
			headers={headers}
			{...tableProps}
		/>
	);
};
