import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableData, TableDataCell } from './types';
import { TableHeader } from './TableHeader/TableHeader';
import { TableHeaderCell } from './TableHeaderCell/TableHeaderCell';
import { TableBody } from './TableBody/TableBody';
import { TableRow } from './TableRow/TableRow';
import { TableCell } from './TableCell/TableCell';

faker.seed(123);

const meta = {
	title: 'Table',
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

const ROWS = 10;

const data: TableData = {
	headers: [
		{ children: 'Name' },
		{ children: 'Age', sorted: 'asc' },
		{
			children: 'Country',
			sorted: 'desc',
			sorter: (a, b) => {
				return (a as string).length - (b as string).length;
			},
		},
	],
	rows: Array(ROWS)
		.fill(null)
		.map<TableDataCell[]>(() => [
			{ value: faker.person.fullName() },
			{ value: faker.number.int({ min: 20, max: 60 }), wrapper: (value) => `${value} years` },
			{ value: faker.location.country() },
		]),
};

export const DataTable: Story = {
	args: {
		data,
	},
};

export const UncontrolledSortableDataTable: Story = {
	args: {
		isSortable: true,
		data,
	},
};

export const ControlledSortableDataTable: Story = {
	args: {
		isSortable: true,
		onSort: (idx, direction) => {
			console.log('Sort', idx, direction);
		},
		data,
	},
};

export const ComposableTable: Story = {
	render(args) {
		return (
			<Table {...args}>
				<TableHeader>
					{data.headers.map((header) => {
						return (
							<TableHeaderCell key={header.children as string}>{header.children}</TableHeaderCell>
						);
					})}
				</TableHeader>
				<TableBody>
					{data.rows.map((row, index) => {
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
					{data.headers.map((header) => {
						return (
							<TableHeaderCell key={header.children as string} sorter={header.sorter}>
								{header.children}
							</TableHeaderCell>
						);
					})}
				</TableHeader>
				<TableBody>
					{data.rows.map((row, index) => {
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
