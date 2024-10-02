import React from 'react';
import { TableHeaderCellProps } from '../types';
import { BaseTableHeaderCell } from './BaseTableHeaderCell';

export const TableHeaderCell = (props: TableHeaderCellProps) => {
	return <BaseTableHeaderCell {...props} />;
};
