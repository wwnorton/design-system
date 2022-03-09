import React from 'react';
import classNames from 'classnames';
import { TableRowProps } from './types';

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
	(
		{
			baseName = 'nds-tablerow',
			children,
			className,
			...props
		}: TableRowProps,
		ref,
	) => {
		const classes = classNames(className, baseName);
		return (
			<tr className={classes} {...props} ref={ref}>
				{children}
			</tr>
		);
	},
);
