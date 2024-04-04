import React from 'react';
import { TableHeaderProps } from './types';
import { useTableState } from './context';
import { TableHeadCell } from './TableHeadCell';
import { Checkbox } from '../Checkbox';
import { useId } from '../../utilities';
import { TableRow } from './TableRow';

const SELECT_ALL_HEADER_LABEL = 'Select All';

export const TableHeader: React.FC<TableHeaderProps> = ({
	children,
	className = 'nds-table__header',
}) => {
	const { selectable, onSelect, onSelectedAll, isSelectedAll } = useTableState();
	const uniqueId = useId();

	return (
		<thead className={className}>
			<TableRow isHeader>
				{selectable && onSelect ? (
					<TableHeadCell aria-label={SELECT_ALL_HEADER_LABEL}>
						<Checkbox
							id={uniqueId}
							checked={isSelectedAll}
							labelClass="nds-sr-only"
							onChange={onSelectedAll}
						>
							{SELECT_ALL_HEADER_LABEL}
						</Checkbox>
					</TableHeadCell>
				) : null}
				{children}
			</TableRow>
		</thead>
	);
};
