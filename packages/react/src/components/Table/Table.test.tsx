import React from 'react';
import test from 'ava';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from './Table';
import { tableData } from './data';
import { DataTableProps } from './DataTable/types';
import { renderComposableTable } from './test-utils/renderComposableTable';
import { assertTableStructure } from './test-utils/assertTableStructure';
import { assertUncontrolledSort } from './test-utils/assertUncontrolledSort';
import { mockFn } from './test-utils/mockFn';
import { assertControlledSort } from './test-utils/assertControlledSort';

test.afterEach.always(cleanup);

test('DataTable: renders correctly', async (t) => {
	render(<Table data={tableData} />);
	assertTableStructure(t);
});

test('DataTable + Uncontrolled Sort', async (t) => {
	const user = userEvent.setup();

	render(<Table isSortable data={tableData} />);

	await assertUncontrolledSort(user, t);
});

test('DataTable + Controlled Sort', async (t) => {
	const user = userEvent.setup();
	const mockOnSort = mockFn<NonNullable<DataTableProps['onSort']>>(() => {});

	render(<Table isSortable data={tableData} onSort={(...args) => mockOnSort.fn(...args)} />);

	await assertControlledSort(mockOnSort, t, user);
});

test('ComposableTable', (t) => {
	renderComposableTable();
	assertTableStructure(t);
});

test('ComposableTable + Uncontrolled Sorting', async (t) => {
	const user = userEvent.setup();
	renderComposableTable({ isSortable: true });
	await assertUncontrolledSort(user, t);
});

test('ComposableTable + Controlled Sorting', async (t) => {
	const user = userEvent.setup();
	const mockOnSort = mockFn<NonNullable<DataTableProps['onSort']>>(() => {});
	renderComposableTable({ isSortable: true, onSort: (...args) => mockOnSort.fn(...args) });
	await assertControlledSort(mockOnSort, t, user);
});

[
	{
		value: undefined,
		css: 'nds-table--navy',
	},
	{
		value: 'navy',
		css: 'nds-table--navy',
	},
	{
		value: 'navy-dark',
		css: 'nds-table--navy-dark',
	},
	{
		value: 'gray',
		css: 'nds-table--gray',
	},
].forEach(({ value, css }) => {
	test(`Table Color: ${value}`, (t) => {
		render(<Table color={value as any} data={tableData} />);
		const table = screen.getByRole('table');
		t.true(table.classList.contains(css));
	});
});

[
	{
		value: undefined,
		css: 'nds-table--cell-base',
	},
	{
		value: 'sm',
		css: 'nds-table--cell-sm',
	},
	{
		value: 'lg',
		css: 'nds-table--cell-lg',
	},
	{
		value: 'xl',
		css: 'nds-table--cell-xl',
	},
].forEach(({ value, css }) => {
	test(`Table Cell Padding: ${value}`, (t) => {
		render(<Table cellPadding={value as any} data={tableData} />);
		const table = screen.getByRole('table');
		t.true(table.classList.contains(css));
	});
});

test('Table Sticky Header', (t) => {
	render(<Table stickyHeader data={tableData} />);
	const table = screen.getByRole('table');
	t.true(table.classList.contains('nds-table--sticky'));
});

[
	{
		value: undefined,
		css: 'nds-table--borders-all',
	},
	{
		value: 'all',
		css: 'nds-table--borders-all',
	},
	{
		value: 'no-vertical',
		css: 'nds-table--borders-no-vertical',
	},
].forEach(({ value, css }) => {
	test(`Table Borders: ${value}`, (t) => {
		render(<Table borders={value as any} data={tableData} />);
		const table = screen.getByRole('table');
		t.true(table.classList.contains(css));
	});
});

[
	{
		value: undefined,
		css: 'nds-table--solid',
	},
	{
		value: 'solid',
		css: 'nds-table--solid',
	},
	{
		value: 'outline',
		css: 'nds-table--outline',
	},
	{
		value: 'ghost',
		css: 'nds-table--ghost',
	},
].forEach(({ value, css }) => {
	test(`Table Variant: ${value}`, (t) => {
		render(<Table variant={value as any} data={tableData} />);
		const table = screen.getByRole('table');
		t.true(table.classList.contains(css));
	});
});

test('Table Not Striped', (t) => {
	render(<Table isNotStriped data={tableData} />);
	const table = screen.getByRole('table');
	t.false(table.classList.contains('nds-table--striped'));
});
