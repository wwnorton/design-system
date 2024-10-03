import React from 'react';
import { BaseTable } from '../BaseTable/BaseTable';
import { ComposableTableProps } from './types';
import { SortableComposableTable } from './SortableComposableTable';

export const ComposableTable = ({ isSortable, ...others }: ComposableTableProps) => {
	if (isSortable) {
		return <SortableComposableTable {...others} />;
	}

	return <BaseTable {...others} />;
};
