import React from 'react';
import classNames from 'classnames';
import { TableRowProps } from './types';

const BASE_NAME = 'nds-table-row';

const styles = {
	header: `${BASE_NAME}-header`,
	sectionHeader: `${BASE_NAME}-section--header`,
};

export const TableRow: React.FC<TableRowProps> = ({
	isHeader, isSectionHeader, children, ...rest
}) => {
	// eslint-disable-next-line no-nested-ternary
	const classNames = isHeader ? styles.header : isSectionHeader ? styles.sectionHeader : '';

	return (
		<tr className={classNames} {...rest}>
			{children}
		</tr>
	);
};
