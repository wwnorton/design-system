import React, { useEffect } from 'react';
import { TableRowProps } from '../types';
import { useId } from '../../../utilities/id';
import { useSortingState } from '../ComposableTable/SortingContext';

export const TableRow = (props: TableRowProps) => {
	const sortingState = useSortingState();
	const rowId = useId();

	useEffect(() => {
		if (sortingState) {
			sortingState.registerRow(rowId || '');
		}
		// When there's a sorting state, `registerRow` doesn't change during the
		// lifetime of the table. And the sorting state is resolved before mounting
		// this component, so let's exhaustive-deps to prevent unneeded registers.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <tr {...props} />;
};
