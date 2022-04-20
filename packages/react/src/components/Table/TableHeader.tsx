import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TableHeaderProps } from './types';
import { TableCell } from './TableCell';

export const TableHeader = React.forwardRef<
HTMLTableSectionElement,
TableHeaderProps
>(
	(
		{
			baseName = 'nds-tableheader',
			variant = 'solid',
			sort,
			children,
			stickyHeader,
			className,
			sortHandler,
			...props
		}: TableHeaderProps,
		ref,
	) => {
		const [sortProps, setSortProps] = React.useState({ sortOrder: 'unsorted', columnIndex: 0, ariaSort: '' });
		const [childNodes, setChildNodes] = React.useState<React.ReactNode[]>();
		const sortClassHandler = React.useCallback((sortOrder: string, sortColumnIndex: number) => {
			setSortProps({
				sortOrder,
				columnIndex: Number(sortColumnIndex),
				ariaSort: sort === 'asc' ? 'descending' : 'ascending',
			});
			if (sortHandler) {
				sortHandler(sortOrder, sortColumnIndex);
			}
		}, [sortHandler, setSortProps, sort]);

		const classes = classNames(className, baseName, {
			[`${baseName}--stickyheader`]: stickyHeader,
			[`${baseName}--ghost`]: variant === 'ghost',
			[`${baseName}--outline`]: variant === 'outline',
		});

		const updateTableCellElements = React.useMemo(() => {
			if (!children) return null;
			return React.Children.map(children, (child, childIndex) => {
				if (React.isValidElement(child) && child.type === TableCell) {
					let sortOrder;
					if (sort) {
						sortOrder = 'unsorted';
						if (childIndex === sortProps.columnIndex) {
							sortOrder = sortProps.sortOrder;
						}
					}
					return (
						<TableCell
							header
							sort={sortOrder}
							{...child.props}
							columnIndex={childIndex}
							sortHandler={sortClassHandler}
						/>
					);
				}
				return child;
			});
		}, [children, sort, sortProps, sortClassHandler]);

		useEffect(() => {
			if (updateTableCellElements) {
				setChildNodes(updateTableCellElements);
			}
		}, [updateTableCellElements]);

		return (
			<thead className={classes} {...props} ref={ref}>
				{childNodes}
			</thead>
		);
	},
);
