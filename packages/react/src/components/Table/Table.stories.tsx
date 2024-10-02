import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableDataCell } from './types';
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

const data = {
	headers: [
		{ children: 'Name' },
		{ children: 'Age' },
		{
			children: 'Country',
			sorter: (a, b) => {
				return (b as string).length - (a as string).length;
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

export const ComposableTable: Story = {
	render(args) {
		return (
			<Table {...args}>
				<TableHeader>
					<TableHeaderCell>First Name</TableHeaderCell>
					<TableHeaderCell>Last Name</TableHeaderCell>
					<TableHeaderCell>Age</TableHeaderCell>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Marissa</TableCell>
						<TableCell>Keep</TableCell>
						<TableCell>25 years</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Andrew</TableCell>
						<TableCell>Arnold</TableCell>
						<TableCell>31 years</TableCell>
					</TableRow>
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
					<TableHeaderCell>First Name</TableHeaderCell>
					<TableHeaderCell>Last Name</TableHeaderCell>
					<TableHeaderCell>Age</TableHeaderCell>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Marissa</TableCell>
						<TableCell>Keep</TableCell>
						<TableCell>25 years</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Andrew</TableCell>
						<TableCell>Arnold</TableCell>
						<TableCell>31 years</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);
	},
};
