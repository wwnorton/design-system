export interface BaseTableHeaderCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	/**
	 * A suffix element is rendered after the `children`.
	 * If the Header is sortable, the suffix renders outside of the sortable button.
	 * This is generally used to display tooltips or spinners.
	 */
	suffix?: React.ReactNode;
	order?: number;
	onSort?: () => void;
}
