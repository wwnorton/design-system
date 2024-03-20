import React from 'react';
import { TableHeaderProps } from './types';
import { useTableState } from './context';
import { TableHeadCell } from './TableHeadCell';
import { Checkbox } from '../Checkbox';
import { useId } from '../../utilities';
import { TableRow } from './TableRow';

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className = 'nds-table__header' }) => {
	const { selectable, onSelect, onSelectedAll, isSelectedAll } = useTableState();
	const uniqueId = useId();

	return (
		<thead className={className}>
			<TableRow isHeader>
				{ selectable && onSelect ? (
					<TableHeadCell>
						<Checkbox id={uniqueId} checked={isSelectedAll} onChange={onSelectedAll} />
					</TableHeadCell>
				) : null }
				{children}
			</TableRow>

		</thead>
	);
};
