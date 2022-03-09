import React from 'react';
import classNames from 'classnames';
import ReactIs from 'react-is';
import { TableProps } from './types';
import { TableHeader } from './TableHeader';

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
	(
		{
			baseName = 'nds-table',
			children,
			sort,
			stickyHeader = false,
			className,
			border = true,
			...props
		}: TableProps,
		ref,
	) => {
		const classes = classNames(className, baseName, {
			[`${baseName}--border`]: border,
		});
		const tableElements = React.useMemo(() => {
			if (!children) return null;
			const tableBody: React.ReactElement[] = [];
			const tHeader = React.Children.map(children, (child) => {
				if (ReactIs.isElement(child)) {
					if (child.type === TableHeader) {
						return (
							<TableHeader
								stickyHeader={stickyHeader}
								{...child.props}
								sort={sort}
							/>
						);
					}
					tableBody.push(child);
				}
				return child;
			});
			return { header: tHeader, tbody: tableBody };
		}, [children, stickyHeader, sort]);
		return (
			<table className={classes} ref={ref} {...props}>
				{tableElements ? tableElements.header : null}
				<tbody>{tableElements ? tableElements.tbody : null}</tbody>
			</table>
		);
	},
);
