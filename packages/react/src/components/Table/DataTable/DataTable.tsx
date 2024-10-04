import React from 'react';
import { BaseDataTable } from './BaseDataTable';
import { DataTableProps } from './types';
import { SortableDataTable } from './SortableDataTable';
import { ControlledSortableDataTable } from './ControlledSortableDataTable';

export const DataTable = ({ data, isSortable, onSort, ...others }: DataTableProps) => {
	if (isSortable) {
		if (onSort) {
			return <ControlledSortableDataTable data={data} onSort={onSort} {...others} />;
		}

		return <SortableDataTable data={data} {...others} />;
	}

	return <BaseDataTable rowsData={data.rows} headersData={data.headers} {...others} />;
};
