import React from 'react';
import { BaseTableCellProps } from '../types';

const css = {
	header: 'nds-table-cell__header',
	content: 'nds-table-cell__content',
};

export const BaseTableCell = React.forwardRef<HTMLTableCellElement, BaseTableCellProps>(
	({ headerContent, headerSuffix, children, ...tdProps }, ref) => {
		/**
		 * The header component renders the header content
		 * and suffix and displays only in XS breakpoints
		 * for better visual reference to the users.
		 */
		let headerComponent: React.ReactNode = null;
		if (headerContent) {
			headerComponent = (
				<div className={css.header} aria-hidden>
					{headerContent}
					{headerSuffix}
				</div>
			);
		}

		return (
			// eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
			<td role="none" ref={ref} {...tdProps}>
				{headerComponent}
				<div role="cell" className={css.content}>
					{children}
				</div>
			</td>
		);
	},
);
