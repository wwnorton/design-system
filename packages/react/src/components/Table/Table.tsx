import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	SortableValue,
	TableBodyProps,
	TableData,
	TableHeaderCellProps,
	TableHeaderProps,
	TableProps,
	TableRowProps,
} from './types';

interface TableDataProps extends TableProps {
	data: TableData;
}

const TableHeader = ({ children, ...others }: TableHeaderProps) => {
	return (
		<thead {...others}>
			<tr>{children}</tr>
		</thead>
	);
};

interface BaseTableHeaderCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	order?: number;
	onSort?: () => void;
}

const BaseTableHeaderCell = ({ order, onSort, children, ...other }: BaseTableHeaderCellProps) => {
	const sortButton = useMemo(() => {
		if (order === undefined || !onSort) {
			return null;
		}

		let orderText: string;
		switch (order) {
			case 0:
				orderText = 'desc';
				break;
			case 2:
				orderText = 'asc';
				break;
			default:
				orderText = 'default';
				break;
		}

		return (
			<button type="button" onClick={onSort}>
				sort {orderText}
			</button>
		);
	}, [order, onSort]);

	return (
		<th {...other}>
			{children}
			{sortButton}
		</th>
	);
};

const TableBody = (props: TableBodyProps) => {
	return <tbody {...props} />;
};

const TableRow = (props: TableRowProps) => {
	return <tr {...props} />;
};

interface BaseTableCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {}

const BaseTableCell = (props: BaseTableCellProps) => {
	return <td {...props} />;
};

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

const DataTable = ({ data, isSortable }: TableDataProps) => {
	const [sortState, setSortState] = useState<SortState>({
		order: 1,
		index: 0,
		rows: data.rows,
	});

	const onSort = useMemo(() => {
		if (isSortable) {
			return (idx: number) => {
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
			};
		}
		return undefined;
	}, [isSortable, data]);

	return (
		<table>
			<TableHeader>
				{data.headers.map((header, index) => (
					<BaseTableHeaderCell
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						order={sortState.index === index ? sortState.order : 1}
						onSort={() => onSort?.(index)}
					>
						{header.children}
					</BaseTableHeaderCell>
				))}
			</TableHeader>
			<TableBody>
				{sortState.rows.map((row, rowIndex) => (
					// eslint-disable-next-line react/no-array-index-key
					<TableRow key={rowIndex}>
						{row.map((cell, cellIndex) => {
							let children: React.ReactNode;
							if (cell.wrapper) {
								children = cell.wrapper(cell.value);
							} else {
								children = `${cell.value}`;
							}
							// eslint-disable-next-line react/no-array-index-key
							return <BaseTableCell key={cellIndex}>{children}</BaseTableCell>;
						})}
					</TableRow>
				))}
			</TableBody>
		</table>
	);
};

export const Table = ({ data, ...other }: TableProps) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (data) {
		return <DataTable data={data} {...other} />;
	}

	throw new Error('Not implemented yet');
};
