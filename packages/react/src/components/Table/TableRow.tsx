import React, { useEffect } from "react";
import classNames from "classnames";
import { TableRowProps } from "./types";
import { useTableState } from './context';
import { Checkbox } from '../Checkbox';
import { useId } from '../../utilities';

export const TableRow: React.FC<TableRowProps> = ({
	baseName = "nds-table-row",
	headerClass = `${baseName}__header`,
	sectionHeaderClass = `${baseName}__header--section`,
	isHeader,
	isSectionHeader,
	id,
	children,
}) => {

	const { selectable, onSelect, onSelected, isSelected, isSelectedAll, registerId } = useTableState();
const uniqueId = id || useId() as string;
	const isSelectable = selectable && onSelect && !isHeader && !isSectionHeader
	const isChecked =isSelectedAll()  || isSelected(uniqueId);

	useEffect(() => {
if (!isSelectable)
return;
registerId(uniqueId);
}, []);

const onChange = () => onSelected?.(uniqueId, !isChecked);

const trClassName = classNames(baseName, {
		[`${headerClass}`]: isHeader,
		[`${sectionHeaderClass}`]: isSectionHeader,
	});

	return (
		<tr className={trClassName} id={uniqueId}>
			{ isSelectable ? (
			<td>
<Checkbox checked={isChecked} onChange={onChange} />
			</td>) : null }
			{children}
		</tr>
	);
};
