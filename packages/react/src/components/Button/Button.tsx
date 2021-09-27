import React from 'react';
import classNames from 'classnames';
import { useForwardedRef } from '../../utilities';
import { BaseButton } from '../BaseButton';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { LiveRegion, useContentMonitor } from '../LiveRegion';
import { BUTTON_NO_NAME } from './errors';
import { ButtonProps } from './types';

/** A button allows a user to perform an action. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
	{
		baseName = 'nds-button',
		variant,
		icon,
		iconRight,
		iconOnly,
		color,
		tooltipProps,
		iconClass = `${baseName}__icon`,
		textClass = `${baseName}__text`,
		className,
		children,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledBy,
		...props
	}: ButtonProps, ref,
) => {
	if (!React.Children.count(children) && !ariaLabel && !ariaLabelledBy) {
		throw new Error(BUTTON_NO_NAME);
	}
	const [button, setButton] = useForwardedRef(ref);
	const liveText = useContentMonitor(button, children);

	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const Children = React.useMemo(() => {
		if (icon && iconOnly) return null;
		if (React.isValidElement(children)) return children;
		const spanProps = { className: textClass, children };
		return <span {...spanProps} />;
	}, [children, icon, iconOnly, textClass]);

	const classes = classNames(
		{
			[`${baseName}--solid`]: variant === 'solid',
			[`${baseName}--outline`]: variant === 'outline',
			[`${baseName}--ghost`]: variant === 'ghost',
			[`${baseName}--icon-only`]: icon && iconOnly,
			[`${baseName}--${color}`]: color !== undefined,
		},
		baseName,
		className,
	);

	return (
		<>
			<BaseButton
				className={classes}
				ref={setButton}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				{...props}
			>
				{ (iconRight) ? null : BaseIcon }
				{ Children }
				{ (iconRight) ? BaseIcon : null }
			</BaseButton>
			{ iconOnly && (
				<Tooltip
					asLabel
					reference={button}
					{...tooltipProps}
				>
					{ children }
				</Tooltip>
			) }
			<LiveRegion>{ liveText }</LiveRegion>
		</>
	);
});
