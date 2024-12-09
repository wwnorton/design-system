import React, { forwardRef, useMemo } from 'react';
import { BaseDataTableProps } from './types';
import { BaseTableHeaderCell } from '../TableHeaderCell/BaseTableHeaderCell';
import { TableRow } from '../TableRow/TableRow';
import { BaseTableCell } from '../TableCell/BaseTableCell';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import { BaseTable } from '../BaseTable/BaseTable';

export const BaseDataTable = forwardRef<HTMLTableElement, BaseDataTableProps>(
	({ headersData, rowsData, headers, rows, ...tableProps }, ref) => {
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
						return (
							<BaseTableCell
								header={cellIndex > 0 ? headersData[cellIndex].children : undefined}
								// eslint-disable-next-line react/no-array-index-key
								key={cellIndex}
							>
								{children}
							</BaseTableCell>
						);
					})}
				</TableRow>
			));
		}, [headersData, rows, rowsData]);

		return (
			<BaseTable ref={ref} {...tableProps}>
				<TableHeader>{Headers}</TableHeader>
				<TableBody>{Rows}</TableBody>
			</BaseTable>
		);
	},
);
