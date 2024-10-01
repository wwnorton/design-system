import React from 'react';
import { TableProps } from './types';
import { DataTable } from './DataTable/DataTable';

export const Table = ({ data, ...other }: TableProps) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (data) {
		return <DataTable data={data} {...other} />;
	}

	throw new Error('Not implemented yet');
};
