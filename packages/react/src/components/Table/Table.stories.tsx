import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Table } from './Table';
import { TableHeader } from './TableHeader/TableHeader';
import { TableHeaderCell } from './TableHeaderCell/TableHeaderCell';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';
import { TableCell } from './TableCell/TableCell';
import { tableData } from './data';
import { TableHeaderCellProps, TableProps } from './types';

const meta = {
	title: 'Components/Table',
	component: Table,
	  argTypes: {
    caption: {
      control: 'text', // ✅ force Storybook to treat it as a string input
    },
},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const DataTable = {
	args: {
		data: tableData,
	},
} satisfies Story;

export const UncontrolledSortableDataTable = {
	args: {
		isSortable: true,
		data: tableData,
	},
} satisfies Story;

export const ControlledSortableDataTable = {
	args: {
		isSortable: true,
		onSort: action('onSort'),
		data: tableData,
	},
} satisfies Story;

export const ComposableTable = {
	render(args) {
		return (
			<Table {...args}>
				<TableHeader>
					{tableData.headers.map((header) => {
						return (
							<TableHeaderCell key={header.children as string}>{header.children}</TableHeaderCell>
						);
					})}
				</TableHeader>
				<TableBody>
					{tableData.rows.map((row, index) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<TableRow key={index}>
								<TableCell>{row[0].value}</TableCell>
								<TableCell>{row[1].value}</TableCell>
								<TableCell value={row[2].value}>
									{row[2].wrapper ? row[2].wrapper(row[2].value) : row[2].value}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	},
} satisfies Story;

export const UncontrolledSortableComposableTable = {
	args: {
		isSortable: true,
	},
	render(args) {
		return (
			<Table {...args}>
				<TableHeader>
					{tableData.headers.map((header) => {
						return (
							<TableHeaderCell key={header.children as string} sorter={header.sorter}>
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
								<TableCell>
									{row[1].wrapper ? row[1].wrapper(row[1].value) : row[1].value}
								</TableCell>
								<TableCell value={row[2].value}>{row[2].value}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	},
} satisfies Story;

export const ControlledSortableComposableTable = {
	args: {
		isSortable: true,
		onSort: action('onSort'),
	},
	render(args) {
		const [data, setData] = useState({
			headers: [
				{
					children: 'Name',
					// TODO: improve typing to get generics
					sorter: (a: string, b: string) => a.localeCompare(b) as any,
				},
				{ children: 'Age', sorter: (a: number, b: number) => a - b } as any,
				{
					children: 'City',
					sorter: (a: string, b: string) => a.localeCompare(b) as any,
				},
			] satisfies TableHeaderCellProps[],
			rows: [
				{
					order: 0,
					row: [{ value: 'John' }, { value: 25 }, { value: 'New York' }],
				},
				{
					order: 1,
					row: [{ value: 'Jane' }, { value: 30 }, { value: 'Los Angeles' }],
				},
				{
					order: 2,
					row: [{ value: 'Jim' }, { value: 28 }, { value: 'Chicago' }],
				},
			],
		});

		const handleSort: NonNullable<TableProps['onSort']> = useCallback(
			(colIdx, direction) => {
				setData((curr) => {
					const newHeaders = curr.headers.map((header, idx) => {
						return {
							...header,
							sorted: idx === colIdx ? direction : undefined,
						};
					});

					const newRows = [...curr.rows];
					if (!direction) {
						newRows.sort((a, b) => {
							return a.order - b.order;
						});
					} else {
						newRows.sort((a, b) => {
							if (direction === 'asc') {
								return newHeaders[colIdx].sorter(a.row[colIdx].value, b.row[colIdx].value);
							}
							return newHeaders[colIdx].sorter(b.row[colIdx].value, a.row[colIdx].value);
						});
					}

					return {
						...curr,
						headers: newHeaders,
						rows: newRows,
					};
				});
				args.onSort?.(colIdx, direction);
			},
			[args],
		);

		return (
			<Table onSort={handleSort} isSortable={args.isSortable}>
				<TableHeader>
					{data.headers.map((header, idx: number) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<TableHeaderCell key={idx} sorted={header.sorted} sorter={header.sorter}>
								{header.children}
							</TableHeaderCell>
						);
					})}
				</TableHeader>
				<TableBody>
					{data.rows.map((row) => {
						return (
							<TableRow key={row.order}>
								{row.row.map((cell, idx) => {
									// eslint-disable-next-line react/no-array-index-key
									return <TableCell key={idx}>{cell.value}</TableCell>;
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		);
	},
} satisfies Story;
