import React from 'react';
import classNames from 'classnames';
import { BadgeProps } from './types';
import { Icon } from '../Icon';

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(({
	variant,
	baseName = 'nds-badge',
	iconClass = `${baseName}__icon`,
	children,
	color,
	className,
	icon,
}: BadgeProps) => {
	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon, size: 12 }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const variantProps = React.useMemo(() => {
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
		<div className={classes}>
			{BaseIcon}
			{variantProps}
		</div>
	);
});
