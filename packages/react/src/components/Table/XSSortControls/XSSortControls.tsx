import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Dropdown, DropdownProps } from '../../Dropdown';
import { SortDirection } from '../types';
import { parseSortDirection } from '../utils/parseSortDirection';
import { formatSortDirection } from '../utils/formatSortDirection';

const baseCssName = 'nds-table-xs-sort-controls';

const css = {
	base: baseCssName,
	label: `${baseCssName}__label`,
};

export interface XSSortControlsProps {
	/**
	 * The callback function to be called when the sort direction is changed.
	 *
	 * @param colIdx - The index of the column to sort.
	 * @param direction - The direction to sort the column.
	 * @returns void
	 */
	onChange: (colIdx: number, direction: SortDirection) => void;

	/**
	 * The index of the column that is currently sorted.
	 */
	sortedIndex?: number;

	/**
	 * The direction of the column that is currently sorted.
	 */
	sortedDirection?: SortDirection;

	/**
	 * The options to be rendered in the dropdown.
	 */
	options: React.ReactNode[];
}

function calculateSelected(sortedIndex?: number, sortedDirection?: SortDirection) {
	if (
		sortedIndex === undefined ||
		sortedDirection === undefined ||
		sortedDirection === SortDirection.NONE
	) {
		return undefined;
	}

	return `${sortedIndex}|${formatSortDirection(sortedDirection)}`;
}

export const XSSortControls = ({
	onChange,
	options,
	sortedIndex,
	sortedDirection,
}: XSSortControlsProps) => {
	const [selected, setSelected] = useState<string | undefined>(
		calculateSelected(sortedIndex, sortedDirection),
	);

	useEffect(() => {
		setSelected(calculateSelected(sortedIndex, sortedDirection));
	}, [sortedIndex, sortedDirection]);

	const children = useMemo(() => {
		const noneValue = '0|none';
		return options.reduce<Array<React.ReactElement | number | string>>(
			(acc, curr, idx) => {
				const ascValue = `${idx}|asc`;
				const descValue = `${idx}|desc`;
				acc.push(
					<Dropdown.Option key={ascValue} value={ascValue}>
						{curr}: Ascending
					</Dropdown.Option>,
				);
				acc.push(
					<Dropdown.Option key={descValue} value={descValue}>
						{curr}: Descending
					</Dropdown.Option>,
				);
				return acc;
			},
			[
				<Dropdown.Option key={noneValue} value={noneValue}>
					None
				</Dropdown.Option>,
			],
		);
	}, [options]);

	const handleOnChange: NonNullable<DropdownProps['onChange']> = useCallback(
		({ value }) => {
			if (typeof value !== 'string') return;

			const [idx, direction] = value.split('|');
			const newOrder = parseSortDirection(direction as any);
			onChange(parseInt(idx, 10), newOrder);
		},
		[onChange],
	);

	return (
		<Dropdown
			labelClass={css.label}
			className={css.base}
			label="Sort By"
			onChange={handleOnChange}
			selected={selected}
		>
			{children}
		</Dropdown>
	);
};
