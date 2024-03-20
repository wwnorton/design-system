import React from "react";
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
	children,
}) => {

	const { selectable, onSelect, selected, onSelected, isSelectedAll } = useTableState();
	const uniqueId = useId();

	const trClassName = classNames(baseName, {
		[`${headerClass}`]: isHeader,
		[`${sectionHeaderClass}`]: isSectionHeader,
	});
const isSelected =isSelectedAll  || selected?.includes(`${uniqueId}`);
const showCheckbox = selectable && onSelect && !isHeader && !isSectionHeader

	return (
		<tr className={trClassName}>
			{ showCheckbox ? (
			<td>
<Checkbox id={uniqueId} checked={isSelected} disabled={isSelectedAll} onChange={onSelected} />
			</td>) : null }
			{children}
		</tr>
	);
};
