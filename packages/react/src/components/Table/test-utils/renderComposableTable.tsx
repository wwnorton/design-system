import { render } from '@testing-library/react';
import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableProps,
	TableRow,
} from '../index';
import { tableData } from '../data';

export function renderComposableTable(props: TableProps = {}) {
	render(
		<Table {...props}>
			<TableHeader>
				{tableData.headers.map((header) => {
					return (
						<TableHeaderCell
							key={header.children as string}
							sorter={header.sorter}
							sorted={header.sorted}
						>
							{header.children}
						</TableHeaderCell>
					);
				})}
			</TableHeader>
			<TableBody>
				{tableData.rows.map((row, index) => {
					return (
						// eslint-disable-next-line react/no-array-index-key
						<TableRow key={index}>
							<TableCell>{row[0].value}</TableCell>
							<TableCell>{row[1].wrapper ? row[1].wrapper(row[1].value) : row[1].value}</TableCell>
							<TableCell value={row[2].value}>{row[2].value}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>,
	);
}
