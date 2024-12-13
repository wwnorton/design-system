export enum SortDirection {
	DESC = 0,
	NONE,
	ASC,
}

export interface BaseTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	/**
	 * The color theme of the table, this adjusts the color of the header and the
	 * stripes.
	 */
	color?: 'navy' | 'navy-dark' | 'gray' | 'gray-dark';

	/**
	 * Adjusts the padding of the cells.
	 */
	cellPadding?: 'sm' | 'base' | 'lg' | 'xl';

	/**
	 * Indicates whether the table header is sticky.
	 */
	stickyHeader?: boolean;

	/**
	 * Override or extend existing table style.
	 */
	className?: string;

	/**
	 * Allows to define the table border style.
	 *  - `all` - Adds vertical and horizontal cell borders.
	 *  - `no-vertical` - Adds horizontal cell borders only.
	 *
	 * @default 'all'
	 */
	borders?: 'all' | 'no-vertical';

	/**
	 * Define header style ghost, outline and solid.
	 *
	 * @default 'solid'
	 */
	variant?: 'ghost' | 'outline' | 'solid';

	/**
	 * Whether the rows will render without an alternating striped background.
	 */
	isNotStriped?: boolean;
}

export interface TableProps extends BaseTableProps {
	/**
	 * The data to be rendered in the table.
	 */
	data?: TableData;

	/**
	 * Used to enable sorting in the table.
	 * For Uncontrolled Sorting, this activates the internal sorting state of the Table component.
	 * For Controlled Sorting, this just renders the buttons in the headers that will call `onSort`.
	 */
	isSortable?: boolean;

	/**
	 * Used for Controlled Sorting. When set, the Table component will not manage the sorting state.
	 * `onSort` is called when the user clicks on one of the column sorting buttons. It receives
	 * the `columnIndex` and the `direction` of the sort `asc`, `desc`, or `default`.
	 */
	onSort?: (columnIndex: number, direction: 'asc' | 'desc' | undefined) => void;
}

export interface TableData {
	headers: TableDataHeader[];
	rows: TableDataCell[][];
}

export type SortableValue = string | number | boolean;

export interface TableDataHeader {
	/**
	 * The element to render inside the data cell
	 */
	children: React.ReactNode;

	/**
	 * Used for Uncontrolled Sorting, overrides the default sorting function for this column.
	 */
	sorter?: (a: SortableValue, b: SortableValue) => number;

	/**
	 * Used for Controlled Sorting, defines the current sort state of the column.
	 */
	sorted?: 'asc' | 'desc' | undefined;
}

export interface TableDataCell {
	/**
	 * The value of the cell
	 */
	value: SortableValue;

	/**
	 * The react component used to wrap the value to render it
	 */
	wrapper?: (value: SortableValue) => React.ReactNode;
}

export interface TableHeaderProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
	/**
	 * Override or extend existing table style.
	 */
	className?: string;
}

export interface TableHeaderCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	/**
	 * Override or extend existing table style.
	 */
	className?: string;

	/**
	 * Used for Uncontrolled Sorting, overrides the default sorting function for this column.
	 */
	sorter?: (a: SortableValue, b: SortableValue) => number;

	/**
	 * Used for Controlled Sorting, defines the current sort state of the column.
	 */
	sorted?: 'asc' | 'desc' | undefined;
}

export interface TableBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
	/**
	 * Override or extend existing table style.
	 */
	className?: string;
}

export interface TableRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
	/**
	 * Override or extend existing table style.
	 */
	className?: string;
}

export interface BaseTableCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	/**
	 * The content of the header that corresponds to this cell.
	 * This will only render in the XS breakpoint to give visual context
	 * to users.
	 */
	header?: React.ReactNode;
}

export interface TableCellProps extends BaseTableCellProps {
	/**
	 * Override or extend existing table style.
	 */
	className?: string;

	/**
	 * The value of the cell.
	 * In uncontrolled sorting the value is used to sort the column. If none is defined
	 * the text content of the cell is used as value.
	 */
	value?: SortableValue;
}
