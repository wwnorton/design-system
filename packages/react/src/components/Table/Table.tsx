import React from 'react';
import { TableProps } from './types';
import { DataTable } from './DataTable/DataTable';
import { ComposableTable } from './ComposableTable/ComposableTable';

export const Table = ({ data, ...other }: TableProps) => {
	if (data) {
		return <DataTable data={data} {...other} />;
	}

	return <ComposableTable {...other} />;
};
