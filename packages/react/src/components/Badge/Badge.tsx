import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';

export { BadgeProps } from './types';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
	baseName = 'nds-badge',
	children,
	color,
	className,
	dot = false,
	'aria-label': ariaLabel,
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
	if (!children && !dot) return null;
	return (
		<span
			className={classes}
			{...props}
			ref={ref}
			aria-label={(dot && !ariaLabel) ? 'has notification' : ariaLabel}
		>
			{dot ? null : children}
		</span>
	);
});
