import React from 'react';
import { BaseDataTable } from './BaseDataTable';
import { DataTableProps } from './types';
import { SortableDataTable } from './SortableDataTable';

export const DataTable = ({ data, isSortable, ...others }: DataTableProps) => {
	if (isSortable) {
		return <SortableDataTable data={data} {...others} />;
	}

	return <BaseDataTable rowsData={data.rows} headersData={data.headers} />;
};
