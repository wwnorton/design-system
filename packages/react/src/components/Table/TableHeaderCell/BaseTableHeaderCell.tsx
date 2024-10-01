import React, { useMemo } from 'react';
import { BaseTableHeaderCellProps } from './types';

export const BaseTableHeaderCell = ({
	order,
	onSort,
	children,
	...other
}: BaseTableHeaderCellProps) => {
	const sortButton = useMemo(() => {
		if (order === undefined || !onSort) {
			return null;
		}

		let orderText: string;
		switch (order) {
			case 0:
				orderText = 'desc';
				break;
			case 2:
				orderText = 'asc';
				break;
			default:
				orderText = 'default';
				break;
		}

		return (
			<button type="button" onClick={onSort}>
				sort {orderText}
			</button>
		);
	}, [order, onSort]);

	return (
		<th {...other}>
			{children}
			{sortButton}
		</th>
	);
};
