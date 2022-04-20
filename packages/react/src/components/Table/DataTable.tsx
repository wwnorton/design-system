import React from 'react';
import classNames from 'classnames';
import { camelCase } from 'camel-case';
import { DataTableProps } from './types';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

type headerType = { name?: string; key: string; sort?: string };

export const DataTable = React.forwardRef<HTMLTableElement, DataTableProps>(
	(
		{
			baseName = 'nds-dataTable',
			stickyHeader,
			className,
			rows,
			header,
			sort,
			...props
		}: DataTableProps,
		ref,
	) => {
		const [columns, setColumns] = React.useState<headerType[]>([]);
		const [rowCollection, setRowCollection] = React.useState<JSX.Element[]>();
		const headers = React.useMemo(() => {
			const columnData: headerType[] = [];
			header?.map((headerData) => {
				if (typeof headerData === 'string') {
					return columnData.push({
						name: headerData,
						key: camelCase(headerData),
					});
				}
				return columnData.push(headerData);
			});
			setColumns(columnData);
			return columnData.map((column) => (
				<TableCell key={column.key}>{column.name}</TableCell>
			));
		}, [header]);

		const captureRowData = React.useCallback(
			(cellCollection: Record<string, string | React.ReactNode>) => {
				if (!cellCollection) return null;
				return cellCollection.map((value: React.ReactChild) => {
					if (typeof value === 'object' && !value.key) {
						const formatter: { cellFormatter: JSX.Element } = value;
						return <TableCell cellFormatter={() => formatter.cellFormatter} />;
					}
					if (value.key) {
						return columns.map((columnKey: headerType) => {
							if (columnKey.key === value.key) {
								return (
									<TableCell>{value.value}</TableCell>
								);
							}
							return null;
						});
					}
					return <TableCell value={value} />;
				});
			},
			[columns],
		);

		const captureColumnData = React.useCallback(
			(cellValues: Record<string, string | React.ReactNode>) => {
				if (!columns) return null;
				return columns.map((columnKey: headerType) => {
					const cValue: Record<string, string | React.ReactChild> = cellValues;
					if (cValue[columnKey.key]) {
						if (cValue[columnKey.key].cellFormatter) {
							return (
								<TableCell
									cellFormatter={cValue[columnKey.key].cellFormatter}
								/>
							);
						}
						return <TableCell>{cValue[columnKey.key]}</TableCell>;
					}
					return <TableCell />;
				});
			},
			[columns],
		);

		const rowsData = React.useCallback(
			(cellValues: Record<string, string | React.ReactNode>) => {
				if (!cellValues) return null;
				if (cellValues instanceof Array) {
					return captureRowData(cellValues);
				}
				return captureColumnData(cellValues);
			},
			[captureRowData, captureColumnData],
		);

		React.useEffect(() => {
			const rowsColl = rows?.map((rowData) => {
				const cellValues: Record<string, string | React.ReactNode> = rowData;
				return (
					<TableRow>
						{rowsData(cellValues)}
					</TableRow>
				);
			});
			setRowCollection(rowsColl);
		}, [rowsData, rows]);
		const classes = classNames(className, baseName, {});

		return (
			<Table className={classes} ref={ref} {...props} stickyHeader={stickyHeader}>
				<TableHeader sort={sort}>{headers}</TableHeader>
				{rowCollection}
			</Table>
		);
	},
);
