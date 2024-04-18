import React from 'react';
import { IconButton } from '../Button';
import { useTableState } from './context';
import { TableSectionHeaderProps } from './types';

export const TableSectionHeader: React.FC<TableSectionHeaderProps> = ({ id, title = '' }) => {
	const { onToggleSection, isSectionExpanded } = useTableState();

	if (!id) return null;

	const isOpen = isSectionExpanded(id);

	const onToggle = () => onToggleSection?.(id);

	const icon = isOpen ? 'chevron-up' : 'chevron-down';
	const label = isOpen ? 'Close' : 'Open';

	return (
		<th colSpan={4}>
			{title}
			<IconButton variant="outline" icon={icon} onClick={onToggle}>
				{label}
			</IconButton>
		</th>
	);
};
