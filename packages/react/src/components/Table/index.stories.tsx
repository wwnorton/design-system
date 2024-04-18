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
			<caption>Class Activity Report - Question 02 Results</caption>
			<TableHeader>
				<TableHeadCell>Student Sha</TableHeadCell>
				<TableHeadCell>Attempts</TableHeadCell>
				<TableHeadCell>Submission Date</TableHeadCell>
				<TableHeadCell>Time Spent</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<td>Agustin Kimbe1</td>
					<td>888</td>
					<td></td>
					<td>0</td>
				</TableRow>
				<TableRow>
					<td>Amantle Trinh</td>
					<td>46</td>
					<td></td>
					<td>0</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// sortable table
export const Sortable: Story = {
	render: () => (
		<Table sortable>
			<caption>Class Activity Report - Question 02 Results</caption>
			<TableHeader>
				<TableHeadCell sortType="descending" onSort={() => {}}>
					Student SHA
				</TableHeadCell>
				<TableHeadCell>Attempts</TableHeadCell>
				<TableHeadCell>Submission Date</TableHeadCell>
				<TableHeadCell>Time Spent</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<td>Amantle Trinh</td>
					<td>46</td>
					<td></td>
					<td>0</td>
				</TableRow>
				<TableRow>
					<td>Agustin Kimbe1</td>
					<td>888</td>
					<td></td>
					<td>0</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// selectable table
export const Selectable: Story = {
	render: () => (
		<Table selectable onSelect={() => {}}>
			<caption>Class Activity Report - Question 02 Results</caption>
			<TableHeader>
				<TableHeadCell>Student SHA</TableHeadCell>
				<TableHeadCell>Attempts</TableHeadCell>
				<TableHeadCell>Submission Date</TableHeadCell>
				<TableHeadCell>Time Spent</TableHeadCell>
			</TableHeader>
			<TableBody>
				<TableRow id="1">
					<td>Agustin Kimbe</td>
					<td>888</td>
					<td>-</td>
					<td>0</td>
				</TableRow>
				<TableRow id="2">
					<td>Amantle Trinh</td>
					<td>46</td>
					<td>-</td>
					<td>0</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};

// table sections
export const TableSections: Story = {
	render: () => (
		<Table>
			<caption>Class Activity Report - Question 02 Results</caption>
			<TableHeader>
				<TableHeadCell>Student SHA</TableHeadCell>
				<TableHeadCell>Attempts</TableHeadCell>
				<TableHeadCell>Submission Date</TableHeadCell>
				<TableHeadCell>Time Spent</TableHeadCell>
			</TableHeader>
			<TableBody isCollapsed id="section-1">
				<TableRow isSectionHeader sectionId="section-1" sectionTitle="Question 01 Results">
				</TableRow>
				<TableRow>
				<td>Agustin Kimbe</td>
        <td>888</td>
        <td>-</td>
        <td>0</td>
				</TableRow>
				<TableRow>
				<td>Amantle Trinh</td>
        <td>46</td>
        <td>-</td>
        <td>0</td>
				</TableRow>
			</TableBody>
			<TableBody isCollapsed id="section-2">
				<TableRow isSectionHeader sectionId="section-2" sectionTitle="Question 02 Results">
				</TableRow>
				<TableRow>
				<td>Chuck Norris</td>
        <td>51</td>
        <td>-</td>
        <td>0</td>
				</TableRow>
				<TableRow>
				<td>Jane Doe</td>
        <td>715</td>
        <td>-</td>
        <td>0</td>
				</TableRow>
				<TableRow>
				<td>Kim Bassinger</td>
        <td>324</td>
        <td>-</td>
        <td>0</td>
				</TableRow>
			</TableBody>
		</Table>
	),
};
