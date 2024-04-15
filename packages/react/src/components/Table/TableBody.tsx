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
	const { isSectionExpanded, registerSection} = useTableState();

	const uniqueId = useId();
	const id = idProp || uniqueId;

	const bodyClassName = classNames(baseName, {
		[collapsedClass]: isCollapsed,
	});

	;

	useEffect(() => {
		registerSection(id);
	}, []);

	const showSection = isSectionExpanded(id as string);
	const label = showSection ? 'Collapsed' : 'Expanded';

	return (
		<tbody className={bodyClassName} aria-label={label}>
			{showSection ? children?.[0] : children}
		</tbody>
	);
};
