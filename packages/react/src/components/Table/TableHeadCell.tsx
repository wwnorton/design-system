import React from 'react';
import className from 'classnames';
import { TableHeadCellProps } from './types';

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
	className: tableHeadCellClassName = 'nds-table__head-cell',
	sortType,
	children,
	'aria-label': ariaLabel,
	onSort,
}) => {
	const tableHeadCellClass = className(tableHeadCellClassName, {
		[`${tableHeadCellClassName}--ascending`]: sortType === 'ascending',
		[`${tableHeadCellClassName}--descending`]: sortType === 'descending',
		[`${tableHeadCellClassName}--other`]: sortType === 'other',
	});

	return (
		<th className={tableHeadCellClass} aria-sort={sortType} onClick={onSort} aria-label={ariaLabel}>
			{children}
		</th>
	);
};
