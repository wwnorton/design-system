import React, { useCallback, useMemo } from 'react';
import { Dropdown, DropdownProps } from '../../Dropdown';
import { SortDirection } from '../types';
import { parseSortDirection } from '../utils/parseSortDirection';

const baseCssName = 'nds-table-xs-sort-controls';

const css = {
	base: baseCssName,
	label: `${baseCssName}__label`,
};

export interface XSSortControlsProps {
	onChange: (colIdx: number, direction: SortDirection) => void;
	options: React.ReactNode[];
}

export const XSSortControls = ({ onChange, options }: XSSortControlsProps) => {
	const children = useMemo(() => {
		const noneValue = '0|none';
		return options.reduce<React.ReactChild[]>(
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
		<Dropdown labelClass={css.label} className={css.base} label="Sort By" onChange={handleOnChange}>
			{children}
		</Dropdown>
	);
};
