import { ReactNode } from 'react';
import { BaseTableProps, TableData, TableProps } from '../types';

export interface BaseDataTableProps extends BaseTableProps {
	headersData: TableData['headers'];
	rowsData: TableData['rows'];
	headers?: ReactNode;
	rows?: ReactNode;
}

export type DataTableProps = Omit<TableProps, 'data'> & Required<Pick<TableProps, 'data'>>;
