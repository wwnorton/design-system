export interface TableState {
	selectable?: boolean;
	isSelected: (id:string) => boolean;
	isSelectedAll: () => boolean;
	onSelect?: (data?: any) => void;
	registerId: (key: string, value?: boolean) => void;
	onSelected?: (id: string, checked: boolean) => void;
	onSelectedAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selected: Choices;
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
	id?: string;
}

export interface TableHeadCellProps {
	className?: string;
	sortType?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
	onSort?: VoidFunction |undefined;
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

export type Choices = Record<string, boolean>;
