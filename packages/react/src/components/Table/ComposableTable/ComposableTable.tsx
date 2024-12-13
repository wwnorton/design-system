import React, { forwardRef } from 'react';
import { BaseTable } from '../BaseTable/BaseTable';
import { ComposableTableProps } from './types';
import { SortableComposableTable } from './SortableComposableTable';
import { HeadersContextProvider } from './HeadersContext';
import { ControlledSortableComposableTable } from './ControlledSortableComposableTable';

export const ComposableTable = forwardRef<HTMLTableElement, ComposableTableProps>(
	({ isSortable, onSort, ...others }, ref) => {
		let table: React.ReactNode;
		if (isSortable) {
			if (onSort) {
				table = <ControlledSortableComposableTable ref={ref} onSort={onSort} {...others} />;
			} else {
				table = <SortableComposableTable ref={ref} {...others} />;
			}
		} else {
			table = <BaseTable ref={ref} {...others} />;
		}

		return <HeadersContextProvider>{table}</HeadersContextProvider>;
	},
);
