import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';
import { Icon } from '../Icon';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
	baseName = 'nds-badge',
	iconClass = `${baseName}__icon`,
	children,
	color,
	className,
	icon,
	dot = false,
	...props
}: BadgeProps, ref) => {
	const BaseIcon = React.useMemo(() => {
		if (!icon || dot === true) return null;
		const iconProps = (typeof icon === 'string') ? { variant: icon } : { icon };
		return <Icon className={iconClass} {...iconProps} />;
	}, [icon, iconClass, dot]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--dot`]: dot === true,
		},
	);

	return (
		<span className={classes} {...props} ref={ref}>
			{BaseIcon}
			{dot ? null : children}
		</span>
	);
});
