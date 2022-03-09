import React from 'react';
import {
	Table,
	TableRow,
	TableHeader,
	TableCell,
} from '.';

export default {
	title: 'Table',
	component: Table,
	argTypes: {
		border: { control: 'boolean' },
		stickyHeader: { control: 'boolean' },
		variant: {
			options: ['solid', 'outline', 'ghost'],
			control: { type: 'radio' },
		},
		sort: {
			options: ['asc', 'desc', 'unsorted'],
			control: { type: 'radio' },
		},
	},
};

const TableStory = ({ ...args }) => (
	<Table {...args}>
		<TableHeader variant={args.variant} sort={args.sort}>
			<TableCell>Header 1 </TableCell>
			<TableCell>Header 2 </TableCell>
			<TableCell>Header 3</TableCell>
		</TableHeader>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
			<TableCell>Test</TableCell>
		</TableRow>
	</Table>
);

export const Default = TableStory.bind({});
Default.args = {
	border: true,
	stickyHeader: false,
	variant: 'solid',
};
