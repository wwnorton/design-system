import { ExecutionContext } from 'ava';
import userEvent from '@testing-library/user-event/index';
import { screen } from '@testing-library/react';
import { DataTableProps } from '../DataTable/types';
import { MockFn } from './mockFn';

export async function assertControlledSort(
	mockOnSort: MockFn<NonNullable<DataTableProps['onSort']>>,
	t: ExecutionContext,
	user: ReturnType<typeof userEvent.setup>,
) {
	mockOnSort.mockImplementation((id, direction) => {
		t.is(id, 0);
		t.is(direction, 'asc');
	});
	const nameSortButton = screen.getByRole('button', { name: 'Name' });
	await user.click(nameSortButton);

	mockOnSort.mockImplementation((id, direction) => {
		t.is(id, 1);
		t.is(direction, 'desc');
	});
	const ageSortButton = screen.getByRole('button', { name: 'Age' });
	await user.click(ageSortButton);

	mockOnSort.mockImplementation((id, direction) => {
		t.is(id, 2);
		t.is(direction, undefined);
	});
	const countrySortButton = screen.getByRole('button', { name: 'Country' });
	await user.click(countrySortButton);
}
