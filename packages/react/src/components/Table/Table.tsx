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
		const [tableBody, setTableBody] = React.useState<React.ReactElement[]>();
		const classes = classNames(className, baseName, {
			[`${baseName}--border`]: border,
		});

		/** A compare function that will sort children by value(s) */
		const compare = React.useCallback((sortBy: string, sortColumnIndex: number) => {
			if (!sortBy && !sortColumnIndex) return null;
			return (a:React.ReactElement, b:React.ReactElement): number => {
				const aCellData = a.props.children[sortColumnIndex].props.value
					? a.props.children[sortColumnIndex].props.value
					: a.props.children[sortColumnIndex].props.children;
				const bCellData = b.props.children[sortColumnIndex].props.value
					? b.props.children[sortColumnIndex].props.value
					: b.props.children[sortColumnIndex].props.children;
				if (aCellData === bCellData) {
					return 0;
				}
				if (sortBy === 'asc') {
					return aCellData < bCellData ? -1 : 1;
				}
				return aCellData > bCellData ? -1 : 1;
			};
		}, []);

		const sortHandler = React.useCallback((sortOrder: string, sortColumnIndex: number) => {
			if (children) {
				const Children: React.ReactElement[] = children;
				if (Children) {
					const sortChild = Children
						.slice(1)
						.sort(compare(sortOrder, sortColumnIndex));
					setTableBody(sortChild);
				}
			}
		}, [compare, setTableBody, children]);

		const tableElements = React.useMemo(() => {
			if (!children) return null;
			const tBody: React.ReactElement[] = [];
			const tHeader = React.Children.map(children, (child) => {
				if (!child) return null;
				if (ReactIs.isElement(child)) {
					if (child.type === TableHeader) {
						return (
							<TableHeader
								stickyHeader={stickyHeader}
								{...child.props}
								sort={sort}
								sortHandler={sortHandler}
							/>
						);
					}
					tBody.push(child);
				}
				return null;
			});
			setTableBody(tBody);
			return { header: tHeader, tbody: tBody };
		}, [children, stickyHeader, sort, sortHandler]);

		return (
			<table className={classes} ref={ref} {...props}>
				{tableElements ? tableElements.header : null}
				<tbody>{tableBody}</tbody>
			</table>
		);
	},
);
