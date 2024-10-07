import React from 'react';
import classNames from 'classnames';
import { BaseTableProps } from '../types';

const css = {
	base: 'nds-table',
};

export const BaseTable = ({
	cellPadding = 'base',
	borders = 'all',
	className,
	...others
}: BaseTableProps) => {
	const resolvedClassName = classNames(
		css.base,
		{
			[`nds-table--cell-${cellPadding}`]: !!cellPadding,
			[`nds-table--borders-${borders}`]: !!borders,
		},
		className,
	);

	return <table className={resolvedClassName} {...others} />;
};
