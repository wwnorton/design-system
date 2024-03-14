import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Table, TableHeadCell, TableBody, TableRow, TableHeader,
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
		<Table selectable>
			<TableHeader>
				<TableHeadCell sortType="ascending" onSort={() => { }}>
					Header 1
				</TableHeadCell>
				<TableHeadCell sortType="descending" onSort={() => { }}>
					Header 2
				</TableHeadCell>
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

// selectable table
// export const Selectable: Story = {
// 	render: () => (
// 		<Table selectable onSelect={() => alert('Put your selection logic here')}>
// 			<thead>
// 				<TableRow isHeader>
// 					<TableHeadCell className="" sortType="asc" onSort={() => { }}>
// 						Header 1
// 					</TableHeadCell>
// 					<TableHeadCell className="" sortType="desc" onSort={() => { }}>
// 						Header 2
// 					</TableHeadCell>
// 					<TableHeadCell>Header 3</TableHeadCell>
// 				</TableRow>
// 			</thead>
// 			<TableBody>
// 				<TableRow>
// 					<td>Row 1, Cell 1</td>
// 					<td>Row 1, Cell 2</td>
// 					<td>Row 1, Cell 3</td>
// 				</TableRow>
// 				<TableRow>
// 					<td>Row 2, Cell 1</td>
// 					<td>Row 2, Cell 2</td>
// 					<td>Row 2, Cell 3</td>
// 				</TableRow>
// 			</TableBody>
// 		</Table>
// 	),
// };

// // table sections
// export const Sections: Story = {
// 	render: () => (
// 		<Table>
// 			<thead>
// 				<TableRow isHeader>
// 					<TableHeadCell className="" sortType="asc" onSort={() => { }}>
// 						Header 1
// 					</TableHeadCell>
// 					<TableHeadCell className="" sortType="desc" onSort={() => { }}>
// 						Header 2
// 					</TableHeadCell>
// 					<TableHeadCell>Header 3</TableHeadCell>
// 				</TableRow>
// 			</thead>
// 			<TableBody isCollapsed>
// 				<TableRow isSectionHeader>
// 					<td colSpan={3}>Section Header</td>
// 				</TableRow>
// 				<TableRow>
// 					<td>Row 2, Cell 1</td>
// 					<td>Row 2, Cell 2</td>
// 					<td>Row 2, Cell 3</td>
// 				</TableRow>
// 			</TableBody>
// 		</Table>

// 	),
// };
