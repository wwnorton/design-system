import React from 'react';
import classNames from 'classnames';
import { BaseTableHeaderCellProps } from './types';
import { Icon } from '../../Icon';

const css = {
	sortButton: {
		base: 'nds-table-sort-button',
		asc: 'nds-table-sort-button__icon--asc',
		desc: 'nds-table-sort-button__icon--desc',
		icon: 'nds-table-sort-button__icon',
	},
};

interface SortButtonProps {
	order: number | undefined;
	onClick: () => void;
	children?: React.ReactNode;
}

export const SortButton = ({ order, onClick, children }: SortButtonProps) => {
	const iconClassName = classNames(css.sortButton.icon, {
		[css.sortButton.asc]: order === 2,
		[css.sortButton.desc]: order === 0,
	});

	let icon: React.ReactNode;
	switch (order) {
		case 0:
			icon = <Icon size="1rem" variant="caret-down" />;
			break;
		case 2:
			icon = <Icon size="1rem" variant="caret-up" />;
			break;
		default:
			icon = (
				<>
					<Icon
						viewBox="6 6 12 12"
						width="1rem"
						height="0.5rem"
						style={{ width: '1rem' }}
						variant="caret-up"
					/>
					<Icon
						viewBox="6 6 12 12"
						width="1rem"
						height="0.5rem"
						style={{ width: '1rem' }}
						variant="caret-down"
					/>
				</>
			);
			break;
	}

	return (
		<button className={css.sortButton.base} type="button" onClick={onClick}>
			{children}
			<div className={iconClassName}>{icon}</div>
		</button>
	);
};

export const BaseTableHeaderCell = ({
	order,
	onSort,
	children,
	...other
}: BaseTableHeaderCellProps) => {
	let content = children;
	if (onSort) {
		content = (
			<SortButton order={order} onClick={onSort}>
				{children}
			</SortButton>
		);
	}

	return <th {...other}>{content}</th>;
};
