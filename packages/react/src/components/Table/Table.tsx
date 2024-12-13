import React, { forwardRef } from 'react';
import { TableProps } from './types';
import { DataTable } from './DataTable/DataTable';
import { ComposableTable } from './ComposableTable/ComposableTable';

export const Table = forwardRef<HTMLTableElement, TableProps>(({ data, ...other }, ref) => {
	if (data) {
		return <DataTable ref={ref} data={data} {...other} />;
	}

	return <ComposableTable ref={ref} {...other} />;
});
