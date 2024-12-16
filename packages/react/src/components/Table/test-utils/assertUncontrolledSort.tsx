import userEvent from '@testing-library/user-event/index';
import { ExecutionContext } from 'ava';
import { screen, within } from '@testing-library/react';

export async function assertUncontrolledSort(
	user: ReturnType<typeof userEvent.setup>,
	t: ExecutionContext,
) {
	const nameSortButton = screen.getByRole('button', { name: 'Name' });

	// Sorts in ascending order
	{
		await user.click(nameSortButton);

		const rows = screen.getAllByRole('row');
		/* spell-checker: disable */
		within(rows[1]).getByText('Abel Walter');
		within(rows[2]).getByText('Andy Leannon');
		within(rows[3]).getByText('Bert Schultz');
		/* spell-checker: enable */
	}

	// Sorts in descending order
	{
		await user.click(nameSortButton);

		const rows = screen.getAllByRole('row');
		/* spell-checker: disable */
		within(rows[1]).getByText('Winifred Hirthe');
		within(rows[2]).getByText('Willard Keebler');
		within(rows[3]).getByText('Terrance Nicolas');
		/* spell-checker: enable */
	}

	// Sorts in default order again
	{
		await user.click(nameSortButton);

		const rows = screen.getAllByRole('row');
		/* spell-checker: disable */
		within(rows[1]).getByText('Edmond Lubowitz');
		within(rows[2]).getByText('Jeffery Heathcote');
		within(rows[3]).getByText('Natalie Daniel');
		/* spell-checker: enable */
	}

	// Uses custom sorter
	const countrySortButton = screen.getByRole('button', { name: 'Country' });
	{
		await user.click(countrySortButton);

		const rows = screen.getAllByRole('row');
		within(rows[1]).getByText('Iraq');
		within(rows[2]).getByText('Mali');
		within(rows[3]).getByText('Peru');
	}

	t.pass('All sorting combinations passed');
}
