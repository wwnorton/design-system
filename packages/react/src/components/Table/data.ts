import { TableData, TableDataCell } from '@wwnds/react';
import { faker } from '@faker-js/faker';

faker.seed(123);

const ROWS = 50;

export const tableData: TableData = {
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
