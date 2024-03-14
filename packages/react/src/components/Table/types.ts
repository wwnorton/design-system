export interface TableProps {
	className?: string;
	selectableClass?: string;
	selectable?: boolean;
	onSelect?: () => void;
}

export interface TableRowProps {
	baseName?: string;
	headerClass?: string;
	sectionHeaderClass?: string;
	isHeader?: boolean;
	isSectionHeader?: boolean;
}

export interface TableHeadCellProps {
	className?: string;
	sortType?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
	onSort?: VoidFunction;
	// TODO: do we need to include this here?
	onSelect?: VoidFunction
}

export interface TableHeaderProps {
	className?: string;
}

export interface TableBodyProps {
	className?: string;
	collapsedClass?: string;
	isCollapsed?: boolean;
}
