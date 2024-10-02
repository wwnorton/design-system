import React from 'react';
import { BaseTable } from '../BaseTable/BaseTable';
import { ComposableTableProps } from './types';

export const ComposableTable = ({ isSortable, ...others }: ComposableTableProps) => {
	if (isSortable) {
		throw new Error('Not implemented yet');
	}

	return <BaseTable {...others} />;
};
