import { ExecutionContext } from 'ava';
import { screen, within } from '@testing-library/react';
import { tableData } from '../data';

export function assertTableStructure<Context>(t: ExecutionContext<Context>) {
	const headerCells = screen.getAllByRole('columnheader');
	t.is(headerCells.length, tableData.headers.length);

	headerCells.forEach((headerCell, index) => {
		// This works OK because of our basic example, but
		// it will break if a `children` is no longer a string in `data.ts`.
		t.is(headerCell.textContent, tableData.headers[index].children);
	});

	const rows = screen.getAllByRole('row');
	// We don't have to count the row in the header.
	t.is(rows.length - 1, tableData.rows.length);

	rows.forEach((row, index) => {
		if (index === 0) {
			return;
		}

		const cells = within(row).getAllByRole('cell');
		cells.forEach((cell, cellIndex) => {
			const rowData = tableData.rows[index - 1][cellIndex];
			t.is(cell.textContent, rowData.wrapper ? rowData.wrapper(rowData.value) : rowData.value);
		});
	});
}
