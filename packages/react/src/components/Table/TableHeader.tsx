/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import { TableHeaderProps } from './types';

const BASE_NAME = 'nds-table-header';

const styles = {
	sortedAsc: `${BASE_NAME}--sorted-asc`,
	sortedDesc: `${BASE_NAME}--sorted-desc`,
};

export const TableHeader: React.FC<TableHeaderProps> = ({
	sorted = undefined,
	onSort = () => { },
	children,
	...rest
}) => {
	const classNames = sorted === 'asc' ? styles.sortedAsc : sorted === 'desc' ? styles.sortedDesc : '';
	const sortLabel = sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : 'none';

	return (
		<th
			{...rest}
			onClick={onSort}
			aria-sort={sortLabel}
			className={classNames}
		>
			{children}
		</th>
	);
};
