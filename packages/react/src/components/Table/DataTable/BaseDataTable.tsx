import React, { useMemo } from 'react';
import { BaseDataTableProps } from './types';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { TableRow } from '../TableRow/TableRow';
import { BaseTableCell } from '../TableCell/BaseTableCell';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';

export const BaseDataTable = ({
	headersData,
	rowsData,
	headers,
	rows,
	...tableProps
}: BaseDataTableProps) => {
	const Headers = useMemo(() => {
		if (headers) {
			return headers;
		}

		return headersData.map((header, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<BaseTableHeaderCell key={index}>{header.children}</BaseTableHeaderCell>
		));
	}, [headersData, headers]);

	const Rows = useMemo(() => {
		if (rows) {
			return rows;
		}

		return rowsData.map((row, rowIndex) => (
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
		));
	}, [rows, rowsData]);

	return (
		<table {...tableProps}>
			<TableHeader>{Headers}</TableHeader>
			<TableBody>{Rows}</TableBody>
		</table>
	);
};
