import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
	baseName = 'nds-badge',
	children,
	color,
	className,
	dot = false,
	...props
}: BadgeProps, ref) => {
	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--dot`]: dot === true,
		},
	);
	return (
		<>
			{(children || dot)
			&& (
				<span
					className={classes}
					{...props}
					ref={ref}
				>
					{dot ? null : children}
				</span>
			)}
		</>
	);
});
