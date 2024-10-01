import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableDataCell } from './types';

faker.seed(123);

const meta = {
	title: 'Table',
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

const ROWS = 10;

export const Default: Story = {
	args: {
		isSortable: true,
		data: {
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
					{ value: faker.number.int({ min: 20, max: 60 }) },
					{ value: faker.location.country() },
				]),
		},
	},
};
