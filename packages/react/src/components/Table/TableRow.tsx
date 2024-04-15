import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TableRowProps } from './types';
import { useTableState } from './context';
import { Checkbox } from '../Checkbox';
import { useId } from '../../utilities';
import { IconButton } from '../Button';

export const TableRow: React.FC<TableRowProps> = ({
	baseName = 'nds-table-row',
	headerClass = `${baseName}__header`,
	sectionHeaderClass = `${baseName}__header--section`,
	isHeader,
	isSectionHeader,
	sectionId,
	sectionLabel = '',
	id: idProp,
	children,
}) => {
	const {
		selectable,
		onSelect,
		onSelected,
		isSelected,
		isSelectedAll,
		registerId,
		onToggleSection,
	} = useTableState();

	const uniqueId = useId();
	const id = idProp || uniqueId;

	const isSelectable = selectable && onSelect && !isHeader && !isSectionHeader;
	const isChecked = isSelectedAll() || isSelected(id);

	useEffect(() => {
		if (isSelectable) {
			registerId(id);
		}
	}, [isSelectable, id]);

	const onChange = () => onSelected?.(id, !isChecked);
	const onToggle = () => onToggleSection?.(sectionId);

	const trClassName = classNames(baseName, {
		[`${headerClass}`]: isHeader,
		[`${sectionHeaderClass}`]: isSectionHeader,
	});

	return (
		<tr className={trClassName} id={id}>
			{isSectionHeader && (
				<th style={{ display: 'block', width: '100%' }}>
					{sectionLabel}
					<IconButton
						variant="outline"
						icon="chevron-down"
						onClick={onToggle}
						aria-label="Toggle section"
						children={undefined}
					/>
				</th>
			)}
			{!isSectionHeader && (
				<>
					{isSelectable && (
						<td>
							<Checkbox checked={isChecked} onChange={onChange} />
						</td>
					)}
					{children}
				</>
			)}
		</tr>
	);
};
