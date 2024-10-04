import React from 'react';
import classNames from 'classnames';
import { BaseTableProps } from '../types';

const css = {
	base: 'nds-table',
};

export const BaseTable = ({ cellPadding = 'base', className, ...others }: BaseTableProps) => {
	const resolvedClassName = classNames(
		css.base,
		{
			[`nds-table--cell-${cellPadding}`]: !!cellPadding,
		},
		className,
	);

	return <table className={resolvedClassName} {...others} />;
};
