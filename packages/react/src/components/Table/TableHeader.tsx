import React from 'react';
import { TableHeaderProps } from './types';
import { useTableState } from './context';
import { TableHeadCell } from './TableHeadCell';
import { Checkbox } from '../Checkbox';
import { TableRow } from './TableRow';

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className = 'nds-table__header' }) => {
	const { selectable, onSelect } = useTableState();

	return (
		<thead className={className}>
			<TableRow isHeader>
				{ selectable ? (
					<TableHeadCell onSelect={onSelect}>
						<Checkbox />
					</TableHeadCell>
				) : null }
				{children}
			</TableRow>

		</thead>
	);
};
