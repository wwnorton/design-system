export interface TableState {
	selectable?: boolean;
	isSelectedAll?: boolean;
	onSelect?: (data?: any) => void;
	onSelected?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSelectedAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selected?: string[];
}

export interface TableProps {
	className?: string;
	selectableClass?: string;
	selectable?: boolean;
	onSelect?: (data?: any) => void;
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
	'aria-label'?: string;
}

export interface TableHeaderProps {
	className?: string;
}

export interface TableBodyProps {
	className?: string;
	collapsedClass?: string;
	isCollapsed?: boolean;
}
