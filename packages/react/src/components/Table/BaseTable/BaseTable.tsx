import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { BaseTableProps } from '../types';
import { BaseTableCaption } from '../TableCaption/BaseTableCaption';

const css = {
	base: 'nds-table',
};

export const BaseTable = forwardRef<HTMLTableElement, BaseTableProps>(
	(
		{
			cellPadding = 'base',
			borders = 'all',
			isNotStriped = false,
			variant = 'solid',
			color = 'navy',
			className,
			stickyHeader = false,
			captionContent,
			captionClassName,
			captionIsVisuallyHidden,
			children,
			...others
		},
		ref,
	) => {
		const resolvedClassName = classNames(
			css.base,
			{
				[`nds-table--cell-${cellPadding}`]: !!cellPadding,
				[`nds-table--borders-${borders}`]: !!borders,
				[`nds-table--${variant}`]: !!variant,
				[`nds-table--${color}`]: !!color,
				'nds-table--striped': !isNotStriped,
				'nds-table--sticky': stickyHeader,
			},
			className,
		);

		return (
			<table ref={ref} className={resolvedClassName} {...others}>
				{captionContent && (
					<BaseTableCaption
						captionContent={captionContent}
						captionClassName={captionClassName}
						captionIsVisuallyHidden={captionIsVisuallyHidden}
					/>
				)}
				{children}
			</table>
		);
	},
);
