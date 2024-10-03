import React from 'react';
import { ComposableTableProps } from './types';
import { SortingProvider } from './SortingContext';
import { BaseTable } from '../BaseTable/BaseTable';

export const SortableComposableTable = (props: ComposableTableProps) => {
	return (
		<SortingProvider>
			<BaseTable {...props} />
		</SortingProvider>
	);
};
