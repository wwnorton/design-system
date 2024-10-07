import React from 'react';
import classNames from 'classnames';
import { BaseTableProps } from '../types';

const css = {
	base: 'nds-table',
};

export const BaseTable = ({
	cellPadding = 'base',
	borders = 'all',
	isStriped = false,
	variant = 'solid',
	className,
	...others
}: BaseTableProps) => {
	const resolvedClassName = classNames(
		css.base,
		{
			[`nds-table--cell-${cellPadding}`]: !!cellPadding,
			[`nds-table--borders-${borders}`]: !!borders,
			[`nds-table--${variant}`]: !!variant,
			'nds-table--striped': isStriped,
		},
		className,
	);

	return <table className={resolvedClassName} {...others} />;
};
