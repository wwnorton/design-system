import React from 'react';
import classNames from 'classnames';
import isEqual from 'react-fast-compare';
import { useForwardedRef } from '../../utilities';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipCoreProps } from '../Tooltip/types';
import { LiveRegion, useContentMonitor } from '../LiveRegion';
import { AllColors } from '../../utilities/color';
import { BUTTON_NO_NAME } from './errors';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends BaseButtonProps {
	/**
	 * Button `children` are required because they are used to provide an accessible
	 * label for the button. When rendering with `iconOnly`, the children will be
	 * rendered as an accessible `Tooltip` that labels the button.
	 */
	children: BaseButtonProps['children'];
	/** Button variant conveys the button's level of visual emphasis. */
	variant?: ButtonVariant;
	/** An icon to include in the button. */
	icon?: IconVariant | SVGIcon;
	/**
	 * Indicates whether the icon should be to the right of the text. By default,
	 * the icon is to the left of the text.
	 */
	iconRight?: boolean;
	/**
	 * Indicates whether the button's contents should only be the icon. When
	 * `true`, the button's text is still required but will be used as the icon's
	 * `aria-label`. If no `icon` is specified, this prop has no effect.
	 */
	iconOnly?: boolean;
	/**
	 * The button's color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),
	 * excluding `disabled` (prefer the `disabled` prop). Note that an `undefined`
	 * color will result in the "primary" color being used.
	 */
	color?: Exclude<AllColors, 'disabled'>;
	/** A reference to the inner `<button>` element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the Button's icon, if one exists. */
	iconClass?: string;
	/** The className for the Button's text, which will be placed in a `<span>` */
	textClass?: string;
	/**
	 * Tooltip props that should be included when the button's children are
	 * rendered as a tooltip.
	 */
	tooltipProps?: Partial<TooltipCoreProps>;
}

/** A button allows a user to perform an action. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
	{
		baseName = 'nds-button',
		variant,
		icon,
		iconRight,
		iconOnly,
		color,
		tooltipProps: tooltip = { transition: 'fade' },
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
	const prevTooltipProps = React.useRef(tooltip);

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

	const tooltipProps = React.useMemo(() => {
		const baseProps = (iconOnly) ? { showDelay: 500, hideDelay: 0 } : {};
		if (!isEqual(tooltip, prevTooltipProps.current)) {
			prevTooltipProps.current = tooltip;
			return { ...tooltip, ...baseProps };
		}
		return { ...prevTooltipProps.current, ...baseProps };
	}, [iconOnly, tooltip]);

	return (
		<>
			<BaseButton className={classes} ref={setButton} {...props}>
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
