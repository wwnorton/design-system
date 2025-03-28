import React from 'react';
import { TableHeaderProps } from '../types';

const css = {
	base: 'nds-table-header',
};

export const TableHeader = ({ children, ...others }: TableHeaderProps) => {
	return (
		<thead className={css.base} {...others}>
			<tr>{children}</tr>
		</thead>
	);
};
