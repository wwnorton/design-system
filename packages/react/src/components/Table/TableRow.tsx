import React from 'react';
import classNames from 'classnames';
import { TableRowProps } from './types';

export const TableRow: React.FC<TableRowProps> = ({
	baseName = 'nds-table-row',
	headerClass = `${baseName}__header`,
	sectionHeaderClass = `${baseName}__header--section`,
	isHeader,
	isSectionHeader,
	children,
}) => {
	const trClassName = classNames(baseName, {
		[`${headerClass}`]: isHeader,
		[`${sectionHeaderClass}`]: isSectionHeader,
	});

	return (
		<tr className={trClassName}>
			{children}
		</tr>
	);
};
