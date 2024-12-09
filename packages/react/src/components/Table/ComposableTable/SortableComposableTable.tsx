import React, { forwardRef } from 'react';
import { ComposableTableProps } from './types';
import { SortingProvider } from './SortingContext';
import { BaseTable } from '../BaseTable/BaseTable';
import { XSSortControlsContainer } from './XSSortControlsContainer';

export const SortableComposableTable = forwardRef<HTMLTableElement, ComposableTableProps>(
	(props, ref) => {
		return (
			<SortingProvider>
				<XSSortControlsContainer />
				<BaseTable ref={ref} {...props} />
			</SortingProvider>
		);
	},
);
