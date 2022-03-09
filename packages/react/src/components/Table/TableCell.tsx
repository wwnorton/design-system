import React from 'react';
import classNames from 'classnames';
import { IconButton } from '../Button';
import { TableCellProps } from './types';

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
	(
		{
			header = false,
			baseName = 'nds-tablecell',
			children,
			stickyHeader,
			className,
			sort: selectedSortProp,
			...props
		}: TableCellProps,
		ref,
	) => {
		const [selectedSort, sortToggle] = React.useState(selectedSortProp);

		const classes = classNames(className, baseName, {
			[`${baseName}--stickyheader`]: stickyHeader,
		});

		const sortClasses = classNames({
			[`${baseName}--sort`]: selectedSort !== undefined,
			[`${baseName}--sort-unsorted`]: selectedSort === 'unsorted',
			[`${baseName}--sort-asc`]: selectedSort === 'asc',
			[`${baseName}--sort-desc`]: selectedSort === 'desc',
		});
		const onSortAsc = (): void => {
			sortToggle('asc');
		};
		const onSortDesc = (): void => {
			sortToggle('desc');
		};
		return header ? (
			<th className={classes} {...props} ref={ref}>
				<span>{children}</span>
				{selectedSortProp ? (
					<span className={sortClasses}>
						<IconButton icon="caret-up" onClick={onSortAsc}>
							Asc
						</IconButton>
						<IconButton icon="caret-down" onClick={onSortDesc}>
							Desc
						</IconButton>
					</span>
				) : null}
			</th>
		) : (
			<td className={classes} {...props} ref={ref}>
				{children}
			</td>
		);
	},
);
