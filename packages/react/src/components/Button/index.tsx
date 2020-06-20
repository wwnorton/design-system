import React from 'react';
import classNames from 'classnames';
import { IconVariant, SVGIcon, useForwardedRef } from '../../utilities';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends BaseButtonProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
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
	/** A reference to the inner <button> element. */
	buttonRef?: React.Ref<HTMLButtonElement>;
	/** The button's children are required at all times for accessibility. */
	children: BaseButtonProps['children'];
	/** The className for the Button's icon, if one exists. */
	iconClass?: string;
	/** The className for the Button's text, which will be placed in a `<span>` */
	textClass?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
	{
		baseName = 'button',
		variant,
		icon,
		iconRight,
		iconOnly,
		iconClass = `${baseName}__icon`,
		textClass = `${baseName}__text`,
		className,
		children,
		...props
	}: ButtonProps, ref,
) => {
	if (!children) {
		throw new Error(Button.errors.noChildren);
	}
	const buttonRef = useForwardedRef(ref);
	const [button, setButton] = React.useState(buttonRef.current);

	React.useEffect(() => setButton(buttonRef.current), [buttonRef]);

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
		},
		baseName,
		className,
	);

	return (
		<>
			<BaseButton className={classes} ref={buttonRef} {...props}>
				{ (iconRight) ? null : BaseIcon }
				{ Children }
				{ (iconRight) ? BaseIcon : null }
			</BaseButton>
			{ iconOnly && <Tooltip asLabel reference={button}>{ children }</Tooltip> }
		</>
	);
}) as React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> & {
	errors: Record<string, string>;
};

Button.errors = {
	noChildren: 'Button components must always have children.',
};

export type IconButtonProps = Omit<ButtonProps, 'iconOnly' | 'iconRight'>;

/**
 * Display an icon in a button. A textual label is required and will be used as
 * both the `title` (tooltip) and as the image's accessible name (alt text).
 */
export const IconButton: React.FunctionComponent<IconButtonProps> = ({
	variant = 'ghost',
	children,
	...props
}: IconButtonProps) => (
	<Button
		iconOnly
		variant={variant}
		{...props}
	>
		{ children }
	</Button>
);
