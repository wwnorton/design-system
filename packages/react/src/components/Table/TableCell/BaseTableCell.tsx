import React from 'react';
import { BaseTableCellProps } from '../types';

const css = {
	header: 'nds-table-cell__header',
	content: 'nds-table-cell__content',
};

export const BaseTableCell = React.forwardRef<HTMLTableCellElement, BaseTableCellProps>(
	({ header, children, ...tdProps }, ref) => {
		let headerComponent: React.ReactNode = null;
		if (header) {
			headerComponent = (
				<div className={css.header} aria-hidden>
					{header}
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
