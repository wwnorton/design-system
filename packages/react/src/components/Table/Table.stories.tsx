import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Table } from './Table';
import { TableHeader } from './TableHeader/TableHeader';
import { TableHeaderCell } from './TableHeaderCell/TableHeaderCell';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';
import { TableCell } from './TableCell/TableCell';
import { tableData } from './data';

const meta = {
	title: 'Components/Table',
	component: Table,
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
		return (
			<Table {...args}>
				<TableHeader>
					{tableData.headers.map((header, idx: number) => {
						let sorted: 'asc' | 'desc' | undefined;
						switch (idx) {
							case 0:
								sorted = 'asc';
								break;
							case 1:
								sorted = 'desc';
								break;
							default:
						}

						return (
							<TableHeaderCell
								sorted={sorted}
								key={header.children as string}
								sorter={header.sorter}
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
