import React from 'react';
import { TableProps } from './types';
import { DataTable } from './DataTable/DataTable';
import { ComposableTable } from './ComposableTable/ComposableTable';

export const Table = ({ data, ...other }: TableProps) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (data) {
		return <DataTable data={data} {...other} />;
	}

	return <ComposableTable {...other} />;
};
