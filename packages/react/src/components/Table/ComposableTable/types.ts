import { TableProps } from '../types';

export type ComposableTableProps = Omit<TableProps, 'data'>;

export type ControlledSortableComposableTableProps = ComposableTableProps &
	Required<Pick<TableProps, 'onSort'>>;
