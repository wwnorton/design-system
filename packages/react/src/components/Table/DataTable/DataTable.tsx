import React, { forwardRef } from 'react';
import { BaseDataTable } from './BaseDataTable';
import { DataTableProps } from './types';
import { SortableDataTable } from './SortableDataTable';
import { ControlledSortableDataTable } from './ControlledSortableDataTable';

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	({ data, isSortable, onSort, ...others }, ref) => {
		if (isSortable) {
			if (onSort) {
				return <ControlledSortableDataTable ref={ref} data={data} onSort={onSort} {...others} />;
			}

			return <SortableDataTable ref={ref} data={data} {...others} />;
		}

		return <BaseDataTable ref={ref} rowsData={data.rows} headersData={data.headers} {...others} />;
	},
);
