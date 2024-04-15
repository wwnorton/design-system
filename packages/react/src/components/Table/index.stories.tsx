import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeadCell, TableBody, TableRow, TableHeader } from './index';

const meta: Meta<typeof Table> = {
	title: 'Table',
	component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

// default table - presentation only
export const Default: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableHeadCell>Header 1</TableHeadCell>
				<TableHeadCell>Header 2</TableHeadCell>
				<TableHeadCell>Header 3</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<td>Row 1, Cell 1</td>
					<td>Row 1, Cell 2</td>
					<td>Row 1, Cell 3</td>
				</TableRow>
				<TableRow>
					<td>Row 2, Cell 1</td>
					<td>Row 2, Cell 2</td>
					<td>Row 2, Cell 3</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// sortable table
export const Sortable: Story = {
	render: () => (
		<Table sortable>
			<TableHeader>
				<TableHeadCell sortType="ascending" onSort={() => {}}>
					Header 1
				</TableHeadCell>
				<TableHeadCell sortType="descending" onSort={() => {}}>
					Header 2
				</TableHeadCell>
				<TableHeadCell>Header 3</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow id="1">
					<td>Row 1, Cell 1</td>
					<td>Row 1, Cell 2</td>
					<td>Row 1, Cell 3</td>
				</TableRow>
				<TableRow id="2">
					<td>Row 2, Cell 1</td>
					<td>Row 2, Cell 2</td>
					<td>Row 2, Cell 3</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// selectable table
export const Selectable: Story = {
	render: () => (
		<Table selectable onSelect={() => {}}>
			<TableHeader>
				<TableHeadCell>Header 1</TableHeadCell>
				<TableHeadCell>Header 2</TableHeadCell>
				<TableHeadCell>Header 3</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow id="1">
					<td>Row 1, Cell 1</td>
					<td>Row 1, Cell 2</td>
					<td>Row 1, Cell 3</td>
				</TableRow>
				<TableRow id="2">
					<td>Row 2, Cell 1</td>
					<td>Row 2, Cell 2</td>
					<td>Row 2, Cell 3</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// table sections
export const TableSections: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableHeadCell>Header 1</TableHeadCell>
				<TableHeadCell>Header 2</TableHeadCell>
				<TableHeadCell>Header 3</TableHeadCell>
			</TableHeader>
			<TableBody isCollapsed id="section-1">
				<TableRow isSectionHeader sectionId="section-1" sectionLabel="Section 1">
					<th>Subheader 1</th>
					<th>Subheader 2</th>
					<th>Subheader 3</th>
				</TableRow>
				<TableRow>
					<td>Row 1, Cell 1</td>
					<td>Row 1, Cell 2</td>
					<td>Row 1, Cell 3</td>
				</TableRow>
				<TableRow>
					<td>Row 2, Cell 1</td>
					<td>Row 2, Cell 2</td>
					<td>Row 2, Cell 3</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};
