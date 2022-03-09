import React from 'react';
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
			...props
		}: TableHeaderProps,
		ref,
	) => {
		const classes = classNames(className, baseName, {
			[`${baseName}--stickyheader`]: stickyHeader,
			[`${baseName}--ghost`]: variant === 'ghost',
			[`${baseName}--outline`]: variant === 'outline',
		});
		const Children = React.useMemo(() => {
			if (!children) return null;
			return React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return <TableCell header sort={sort} {...child.props} />;
				}
				return child;
			});
		}, [children, sort]);

		return (
			<thead className={classes} {...props} ref={ref}>
				{Children}
			</thead>
		);
	},
);
