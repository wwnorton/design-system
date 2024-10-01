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
		within(rows[1]).getByText('Alberto Abshire');
		within(rows[2]).getByText('Bernice Orn');
		within(rows[3]).getByText('Bert Greenholt');
		/* spell-checker: enable */
	}

	// Sorts in descending order
	{
		await user.click(nameSortButton);

		const rows = screen.getAllByRole('row');
		/* spell-checker: disable */
		within(rows[1]).getByText('Willie Mitchell');
		within(rows[2]).getByText('Valerie Marks');
		within(rows[3]).getByText('Taylor Runolfsdottir');
		/* spell-checker: enable */
	}

	// Sorts in default order again
	{
		await user.click(nameSortButton);

		const rows = screen.getAllByRole('row');
		/* spell-checker: disable */
		within(rows[1]).getByText('Leroy Lubowitz');
		within(rows[2]).getByText('Mathew Heathcote');
		within(rows[3]).getByText('Bridget Daniel');
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
