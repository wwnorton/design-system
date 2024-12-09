import React from 'react';
import classNames from 'classnames';
import { useId } from '../../../utilities/id';
import { BaseTableHeaderCellProps } from './types';
import { Icon } from '../../Icon';
import { SortDirection } from '../types';
import { getSortDirectionARIA } from '../utils/getSortDirectionARIA';

const css = {
	sortButton: {
		accessibleName: 'nds-table-sort-button-a11y-name',
		base: 'nds-table-sort-button',
		asc: 'nds-table-sort-button__icon--asc',
		desc: 'nds-table-sort-button__icon--desc',
		icon: 'nds-table-sort-button__icon',
	},
};

interface SortButtonProps {
	direction: SortDirection | undefined;
	onClick: () => void;
	children?: React.ReactNode;
}

export const SortButton = ({ direction, onClick, children }: SortButtonProps) => {
	const id = useId();

	const iconClassName = classNames(css.sortButton.icon, {
		[css.sortButton.asc]: direction === SortDirection.ASC,
		[css.sortButton.desc]: direction === SortDirection.DESC,
	});

	let icon: React.ReactNode;
	switch (direction) {
		case SortDirection.DESC:
			icon = <Icon size="1rem" variant="caret-down" />;
			break;
		case SortDirection.ASC:
			icon = <Icon size="1rem" variant="caret-up" />;
			break;
		default:
			icon = (
				<>
					<Icon
						viewBox="6 6 12 12"
						width="0.9rem"
						height="0.4rem"
						style={{ width: '0.9rem' }}
						variant="caret-up"
					/>
					<Icon
						viewBox="6 6 12 12"
						width="0.9rem"
						height="0.4rem"
						style={{ width: '0.9rem' }}
						variant="caret-down"
					/>
				</>
			);
			break;
	}

	// We need to render the text of the button outside the button
	// to be able to set it to `display: none` on XS breakpoints.
	// This is required since the header of the table won't be visible
	// we want to make sure the buttons are not accessible.
	return (
		<>
			<span aria-labelledby={id} className={css.sortButton.accessibleName} />
			{/* <span className={css.sortButton.accessibleName}>{children}</span> */}
			<button id={id} className={css.sortButton.base} type="button" onClick={onClick}>
				{children}
				<div className={iconClassName}>{icon}</div>
			</button>
		</>
	);
};

export const BaseTableHeaderCell = React.forwardRef<HTMLTableCellElement, BaseTableHeaderCellProps>(
	({ order, onSort, children, ...other }, ref) => {
		let content = children;
		if (onSort) {
			content = (
				<SortButton direction={order} onClick={onSort}>
					{children}
				</SortButton>
			);
		}

		return (
			<th ref={ref} {...other} aria-sort={getSortDirectionARIA(order)}>
				{content}
			</th>
		);
	},
);
