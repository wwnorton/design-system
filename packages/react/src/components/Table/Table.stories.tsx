import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table } from './Table';
import { TableHeader } from './TableHeader/TableHeader';
import { TableHeaderCell } from './TableHeaderCell/TableHeaderCell';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';
import { TableCell } from './TableCell/TableCell';
import { tableData } from './data';

const meta = {
	title: 'Table',
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const DataTable: Story = {
	args: {
		data: tableData,
	},
};

export const UncontrolledSortableDataTable: Story = {
	args: {
		isSortable: true,
		data: tableData,
	},
};

export const ControlledSortableDataTable: Story = {
	args: {
		isSortable: true,
		onSort: action('onSort'),
		data: tableData,
	},
};

export const ComposableTable: Story = {
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
};

export const UncontrolledSortableComposableTable: Story = {
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
};

export const ControlledSortableComposableTable: Story = {
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
};
