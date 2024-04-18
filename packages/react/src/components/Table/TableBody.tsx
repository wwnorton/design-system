import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TableBodyProps } from './types';
import { useTableState } from './context';
import { useId } from '../../utilities';

export const TableBody: React.FC<TableBodyProps> = ({
	children,
	className: baseName = 'nds-table__body',
	collapsedClass = `${baseName}--collapsed`,
	isCollapsed,
	id: idProp,
}) => {
	const { isSectionExpanded, registerSection } = useTableState();

	const uniqueId = useId();
	const id = idProp || uniqueId;

	const bodyClassName = classNames(baseName, {
		[collapsedClass]: isCollapsed,
	});

	const isSection = isCollapsed !== undefined;
	const showSection = isSection && isSectionExpanded(id as string);

	let label = '';
	if (isSection) {
		label = showSection ? 'Collapsed' : 'Expanded';
	}

	useEffect(() => {
		if (isSection && registerSection && id) {
			registerSection(id);
		}
	}, [isSection, registerSection, id]);

	return (
		<tbody className={bodyClassName} aria-label={label}>
			{showSection ? children?.[0] : children}
		</tbody>
	);
};
