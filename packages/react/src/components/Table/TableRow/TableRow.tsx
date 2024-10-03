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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <tr {...props} />;
};
