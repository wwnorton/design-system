import React, { forwardRef } from 'react';
import { ControlledSortableComposableTableProps } from './types';
import { BaseTable } from '../BaseTable/BaseTable';
import { XSSortControlsContainer } from './XSSortControlsContainer';
import { ControlledSortingProvider } from './ControlledSortingContext';

export const ControlledSortableComposableTable = forwardRef<
	HTMLTableElement,
	ControlledSortableComposableTableProps
>(({ onSort, ...other }, ref) => {
	return (
		<ControlledSortingProvider onSort={onSort}>
			<XSSortControlsContainer />
			<BaseTable ref={ref} {...other} />
		</ControlledSortingProvider>
	);
});
