import React from 'react';

export type TableHeaderVariant = 'solid' | 'outline' | 'ghost';
export type TableSort = 'asc' | 'desc' | 'unsorted';
export type TableCellAlignment = 'right' | 'left' | 'center';
export type TableCellType = 'Text' | 'Number' | 'Date' | 'Boolean' | 'Any';

export interface TableProps
	extends React.TableHTMLAttributes<HTMLTableElement> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** Indicates whether the table header is sticky. */
	stickyHeader?: boolean;
	/** Override or extend existing table style. */
	className?: string;
	/** Indicates whether table with or without border. */
	border?: boolean;
	/** Sortable header maintain current sort state, which can be asc, desc, or unsorted. */
	sort?: TableSort;
}

export interface TableHeaderProps
	extends React.TableHTMLAttributes<HTMLTableSectionElement> {
	/** Define header border style ghost, outline and solid. */
	variant?: TableHeaderVariant;
	/** Indicates whether the table header is sticky. */
	stickyHeader?: boolean;
	/** Override or extend existing table style. */
	className?: string;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** Sortable header maintain current sort state, which can be asc, desc, or unsorted. */
	sort?: TableSort;

	sortHandler?: (sortOrder: string, sortColumnIndex: number) => void;
}

export interface TableRowProps
	extends React.TableHTMLAttributes<HTMLTableRowElement> {
	/** Override or extend existing table style. */
	className?: string;
	/** The base class name according to BEM conventions. */
	baseName?: string;
}

export interface TableCellProps
	extends React.TableHTMLAttributes<HTMLTableCellElement> {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** Override or extend existing table style. */
	className?: string;
	/** Specifies the number of columns a cell should span. */
	colSpan?: number;
	/** Indicates a cell is header, header converts in <th> by default <td> */
	header?: boolean;
	/** Indicates a cell is header, header converts in <th> by default <td> */
	alignment?: TableCellAlignment;
	/** Indicates cell type whether Text,Number,Date,Boolean,Custom */
	type?: TableCellType;
	/** Indicates React component or string. */
	cellFormatter?: () => JSX.Element;
	/** Indicates table cell value in any format whether. */
	value?: React.ReactText;
	/** Indicates whether the table header is sticky. */
	stickyHeader?: boolean;
	/** Sortable header maintain current sort state, which can be asc, desc, or unsorted. */
	sort?: TableSort;
	/**
	 * A handler for the `onSort` callback for maintaining sort for selected header
	 * columns.
	*/
	sortHandler?: (sortOrder: string, sortColumnIndex: number) => void;
	/** Changed sort behavior for selected sort column  */
	columnIndex?: number;
}

export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	/** Indicates array of JSON formatted row data */
	rows?: (Record<string, unknown> | string[])[];
	/** Datatype can be string, number, boolean, array or object array.
	 *  Object array should have properties
	 * -----------------------------------------------------
	 * Name 		| string  | default undefined
	 * key  		| string  | default undefined
	 * sort 		| variant | 'asc' | 'desc' | 'unsorted'
	 * -----------------------------------------------------
	 */
	header?: (
		| string
		| number
		| boolean
		| {
			name?: string;
			key: string;
			sort?: string;
		}
	)[];
	/** Indicates whether the table header is sticky. */
	stickyHeader?: boolean;
	/** Override or extend existing table style. */
	className?: string;
	/** Indicates whether table with or without border. */
	border?: boolean;
	/** Sortable header maintain current sort state, which can be asc, desc, or unsorted. */
	sort?: TableSort;
	/** The base class name according to BEM conventions. */
	baseName?: string;
}
