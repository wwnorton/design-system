import React from 'react';
import { TableProps } from './types';
import { TableContext, useInitTableState } from './context';

export const Table: React.FC<TableProps> = ({
	className: tableClassName = 'nds-table',
	children,
	selectable,
	onSelect,
}) => {
	const value = useInitTableState({ selectable, onSelect });

	return (
		<TableContext.Provider value={value}>
			<table className={tableClassName}>
				{children}
			</table>
		</TableContext.Provider>

	);
};
