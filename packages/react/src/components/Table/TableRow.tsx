/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TableRowProps } from './types';
import { useTableState } from './context';
import { TableSectionHeader } from './TableSectionHeader';
import { Checkbox } from '../Checkbox';
import { useId } from '../../utilities';

export const TableRow: React.FC<TableRowProps> = ({
	baseName = 'nds-table-row',
	headerClass = `${baseName}__header`,
	sectionHeaderClass = `${baseName}__header--section`,
	isHeader = false,
	isSectionHeader = false,
	sectionId = null,
	sectionTitle = '',
	id: idProp,
	children,
}) => {
	const { selectable, onSelect, onSelected, isSelected, isSelectedAll, registerId } =
		useTableState();

	const uniqueId = useId();
	const id = idProp || uniqueId;

	const isSelectable = selectable && onSelect && !isHeader && !isSectionHeader;
	const isChecked = isSelectedAll() || isSelected(id as string);

	useEffect(() => {
		if (isSelectable && registerId) {
			registerId(id as string, isChecked);
		}
	}, [isSelectable, registerId, id, isChecked]);

	const onChange = () => onSelected?.(id as string, !isChecked);

	const trClassName = classNames(baseName, {
		[`${headerClass}`]: isHeader,
		[`${sectionHeaderClass}`]: isSectionHeader,
	});

	return (
		<tr className={trClassName} id={id}>
			{isSectionHeader && sectionId ? (
				<TableSectionHeader title={sectionTitle} id={sectionId} />
			) : isSelectable ? (
				<td>
					<Checkbox checked={isChecked} onChange={onChange} />
				</td>
			) : (
				<></>
			)}
			{children}
		</tr>
	);
};
