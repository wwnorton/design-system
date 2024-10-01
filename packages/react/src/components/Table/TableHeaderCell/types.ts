export interface BaseTableHeaderCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	order?: number;
	onSort?: () => void;
}
