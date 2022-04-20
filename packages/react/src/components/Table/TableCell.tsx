import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { TableCellProps } from './types';
import { Icon } from '../Icon';

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
	(
		{
			header = false,
			baseName = 'nds-tablecell',
			children,
			stickyHeader,
			className,
			sort,
			value,
			type,
			cellFormatter,
			columnIndex,
			sortHandler,
			...props
		}: TableCellProps,
		ref,
	) => {
		let ariaProps = {};
		if (header && sort !== 'unsorted') {
			ariaProps = sort === 'asc'
				? { 'aria-sort': 'descending' }
				: { 'aria-sort': 'ascending' };
		}

		const classes = classNames(className, baseName, {
			[`${baseName}--stickyheader`]: stickyHeader,
			[`${baseName}--align-right`]: type === 'Number',
			[`${baseName}--align-center`]: type === 'Boolean',
		});

		const sortClasses = classNames({
			[`${baseName}--sort`]: sort !== undefined,
			[`${baseName}--no-sort`]: sort === 'unsorted',
			[`${baseName}--sort-asc`]: sort === 'asc',
			[`${baseName}--sort-desc`]: sort === 'desc',
		});

		const cellData = React.useMemo(() => {
			let defaultValue: string | React.ReactNode | JSX.Element = value || children;
			if (!header) {
				defaultValue = cellFormatter ? cellFormatter() : defaultValue;
			}
			if (!type) return defaultValue;

			if (type === 'Boolean') {
				return <Checkbox />;
			}
			return defaultValue;
		}, [type, value, children, cellFormatter, header]);

		const onSortAsc = (e): void => {
			const colIndex: number = e.currentTarget.getAttribute('column-Index');
			if (sortHandler) {
				sortHandler('asc', colIndex);
			}
		};
		const onSortDesc = (e): void => {
			const colIndex: number = e.currentTarget.getAttribute('column-Index');
			if (sortHandler) {
				sortHandler('desc', colIndex);
			}
		};

		const onSort = (e): void => {
			const colIndex: number = e.currentTarget.getAttribute('column-Index');
			if (sort && sortHandler) {
				if (sort && sort === 'asc') {
					sortHandler('desc', colIndex);
				} else {
					sortHandler('asc', colIndex);
				}
			}
		};

		return header ? (
			<th className={classes} {...props} ref={ref} column-index={columnIndex}>
				{sort && type !== 'Boolean' ? (
					<Button
						variant="ghost"
						className={sortClasses}
						{...ariaProps}
						column-Index={columnIndex}
						onClick={onSort}
					>
						{cellData}
						<>
							<Icon
								variant="caret-up"
								tabIndex="-1"
								column-Index={columnIndex}
								onClick={onSortAsc}
								className={`${baseName}--sort-icon_asc`}
							>
								Ascending
							</Icon>
							<Icon
								variant="caret-down"
								tabIndex="-1"
								column-Index={columnIndex}
								onClick={onSortDesc}
								className={`${baseName}--sort-icon_desc`}
							>
								Descending
							</Icon>
						</>
					</Button>
				) : (
					<span column-Index={columnIndex}>{cellData}</span>
				)}
			</th>
		) : (
			<td className={classes} {...props} ref={ref}>
				{cellData}
			</td>
		);
	},
);
