import React from 'react';
import { TableBodyProps } from '../types';
import { useSortingState } from '../ComposableTable/SortingContext';

export const TableBody = ({ children, ...others }: TableBodyProps) => {
	const sortingState = useSortingState();

	if (!sortingState || sortingState.data.rows.length === 0) {
		return <tbody {...others}>{children}</tbody>;
	}

	const childrenArray = React.Children.toArray(children);
	const sortedChildren = sortingState.data.rows.map((row) => {
		return childrenArray[row.order];
	});

	return <tbody {...others}>{sortedChildren}</tbody>;
};
