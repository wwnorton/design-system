export interface TableSetup {
	selectable?: boolean;
	sortable?: boolean;
	onSelect?: () => void;
}

export interface TableState {
	selectable?: boolean;
	sortable?: boolean;
	isSelected: (id: string) => boolean;
	isSectionExpanded: (id: string) => boolean;
	isSelectedAll: () => boolean;
	onSelect?: (data?: any) => void;
	registerId: (key: string, value?: boolean) => void;
	registerSection: (key: string, value?: boolean) => void;
	onSelected?: (id: string, checked: boolean) => void;
	onToggleSection?: (id: string) => void;
	onSelectedAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selected: Choices;
	sections: TableSections;
}

export interface TableProps {
	className?: string;
	selectableClass?: string;
	selectable?: boolean;
	sortable?: boolean;
	onSelect?: (data?: any) => void;
}

export interface TableRowProps {
	baseName?: string;
	headerClass?: string;
	sectionHeaderClass?: string;
	isHeader?: boolean;
	isSectionHeader?: boolean;
	sectionLabel?: string;
	sectionId?: string;
	id?: string;
}

export interface TableHeadCellProps {
	className?: string;
	sortType?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
	onSort?: VoidFunction | undefined;
	'aria-label'?: string;
}

export interface TableHeaderProps {
	className?: string;
}

export interface TableBodyProps {
	id?: string;
	className?: string;
	collapsedClass?: string;
	isCollapsed?: boolean;
}

export type Choices = Record<string, boolean>;

export type TableSections = Record<string, boolean>;
