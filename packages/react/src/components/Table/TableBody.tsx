import React from 'react';
import classNames from 'classnames';
import { TableBodyProps } from './types';

export const TableBody: React.FC<TableBodyProps> = ({
	children, className: baseName = 'nds-table__body', collapsedClass = `${baseName}--collapsed`, isCollapsed,
}) => {
	const bodyClassName = classNames(baseName, {
		[collapsedClass]: isCollapsed,
	});

	return (
		<tbody className={bodyClassName}>
			{children}
		</tbody>
	);
};
