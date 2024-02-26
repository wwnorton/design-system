export interface TableProps
	extends React.TableHTMLAttributes<HTMLTableElement> {
	selectable?: boolean;
	onSelect?: () => void;
}

export interface TableRowProps
	extends React.HTMLAttributes<HTMLTableRowElement> {
	isHeader?: boolean;
	isSectionHeader?: boolean;
}

export interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
	sorted?: 'asc' | 'desc';
	onSort?: () => void;
}

export interface TableBodyProps
	extends React.HTMLAttributes<HTMLTableSectionElement> {
	isCollapsed?: boolean;
}
