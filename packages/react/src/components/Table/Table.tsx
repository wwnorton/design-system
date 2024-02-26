import React from 'react';
import classNames from 'classnames';
import { TableProps } from './types';

const BASE_NAME = 'nds-table';

const styles = {
	base: `${BASE_NAME}`,
};

export const Table: React.FC<TableProps> = ({
	selectable,
	onSelect = () => { }, children, ...rest
}) => {
	const tableClassName = selectable ? 'selectable' : '';

	return (
		<table className={styles.base} onClick={onSelect} {...rest}>
			{children}
		</table>
	);
};
