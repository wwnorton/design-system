import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Table, TableHeader, TableBody, TableRow,
} from './index';

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
			<thead>
				<TableRow>
					<TableHeader className="" sorted="asc" onSort={() => { }}>
						Header 1
					</TableHeader>
					<TableHeader className="" sorted="desc" onSort={() => { }}>
						Header 2
					</TableHeader>
					<TableHeader>Header 3</TableHeader>
				</TableRow>
			</thead>
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

// selectable table
export const Selectable: Story = {
	render: () => (
		<Table selectable onSelect={() => alert('Put your selection logic here')}>
			<thead>
				<TableRow isHeader>
					<TableHeader className="" sorted="asc" onSort={() => { }}>
						Header 1
					</TableHeader>
					<TableHeader className="" sorted="desc" onSort={() => { }}>
						Header 2
					</TableHeader>
					<TableHeader>Header 3</TableHeader>
				</TableRow>
			</thead>
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

// table sections
export const Sections: Story = {
	render: () => (
		<Table>
			<thead>
				<TableRow isHeader>
					<TableHeader className="" sorted="asc" onSort={() => { }}>
						Header 1
					</TableHeader>
					<TableHeader className="" sorted="desc" onSort={() => { }}>
						Header 2
					</TableHeader>
					<TableHeader>Header 3</TableHeader>
				</TableRow>
			</thead>
			<TableBody isCollapsed>
				<TableRow isSectionHeader>
					<td colSpan={3}>Section Header</td>
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
