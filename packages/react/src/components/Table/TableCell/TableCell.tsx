import React from 'react';
import { BaseTableCell } from './BaseTableCell';
import { TableCellProps } from '../types';

export const TableCell = (props: TableCellProps) => {
	return <BaseTableCell {...props} />;
};
