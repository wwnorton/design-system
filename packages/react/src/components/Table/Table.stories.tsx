import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
	title: 'Table',
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
	args: {
		isSortable: true,
		data: {
			headers: [{ children: 'Name' }, { children: 'Age' }, { children: 'Country' }],
			rows: [
				[{ value: 'John Doe' }, { value: 32 }, { value: 'Canada' }],
				[{ value: 'Jane Doe' }, { value: 31 }, { value: 'USA' }],
			],
		},
	},
};
