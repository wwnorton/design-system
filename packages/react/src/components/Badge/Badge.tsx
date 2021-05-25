import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';
import { Icon } from '../Icon';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
	variant,
	baseName = 'nds-badge',
	iconClass = `${baseName}__icon`,
	children,
	color,
	className,
	icon,
	...props
}: BadgeProps) => {
	const BaseIcon = React.useMemo(() => {
		if (!icon || variant === 'dot') return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon, size: 12 }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass, variant]);

	const VariantProps = React.useMemo(() => {
		if (variant === 'pill') {
			return children !== null && children !== undefined ? children : null;
		}
		return null;
	}, [variant, children]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
			[`${baseName}--${variant}`]: variant !== undefined,
		},
	);

	return (
		<span className={classes} {...props}>
			{BaseIcon}
			{VariantProps}
		</span>
	);
});
