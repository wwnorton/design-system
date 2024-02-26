import React from 'react';
import classNames from 'classnames';
import { TableBodyProps } from './types';

const BASE_NAME = 'nds-table-body';

const styles = {
	collapsed: `${BASE_NAME}--collapsed`,
};

export const TableBody: React.FC<TableBodyProps> = ({ isCollapsed, children, ...rest }) => {
	const classNames = isCollapsed ? styles.collapsed : '';

	return (
		<tbody className={classNames} {...rest}>
			{children}
		</tbody>
	);
};
