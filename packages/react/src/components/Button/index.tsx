import React from 'react';
import classNames from 'classnames';
import BaseButton, { BaseButtonProps } from '../BaseButton';
import { IconVariant, SVGIcon } from '../../utilities/icons';
import Icon from '../Icon';

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

class Button extends React.PureComponent<ButtonProps> {
	private label?: string;

	/* eslint-disable react/sort-comp */
	public static baseName = 'button';
	public static elements = {
		icon: 'icon',
		text: 'text',
	}
	/* eslint-enable react/sort-comp */

	public static defaultProps = {
		baseName: Button.baseName,
		type: 'button',
		iconRight: false,
		iconOnly: false,
	}

	private get Icon(): JSX.Element | null {
		const {
			baseName,
			icon,
			iconClass = `${baseName}__${Button.elements.icon}`,
		} = this.props;
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
			label: this.label,
		};
		const props = (typeof icon === 'string')
			? { ...baseProps, variant: icon }
			: { ...baseProps, icon };
		return <Icon {...props} />;
	}

	private get IconLeft(): JSX.Element | null {
		const { iconRight } = this.props;
		return (iconRight) ? null : this.Icon;
	}

	private get IconRight(): JSX.Element | null {
		const { iconRight } = this.props;
		return (iconRight) ? this.Icon : null;
	}

	private get Children(): ButtonProps['children'] | null {
		const {
			baseName,
			icon,
			iconOnly,
			children,
			textClass = `${baseName}__${Button.elements.text}`,
		} = this.props;
		if (icon && iconOnly) return null;
		if (React.isValidElement(children)) {
			return children;
		}
		return <span className={textClass}>{ children }</span>;
	}

	private getText(children: NonNullable<ButtonProps['children']>): string | undefined {
		const { iconOnly } = this.props;
		return (iconOnly) ? children.toString() : undefined;
	}

	render(): JSX.Element {
		const {
			baseName,
			variant,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			icon, iconRight,
			iconOnly,
			title,
			buttonRef,
			className,
			children,
			...attributes
		} = this.props;

		const classes = classNames(
			{
				[`${baseName}`]: true,
				[`${baseName}--solid`]: variant === 'solid',
				[`${baseName}--outline`]: variant === 'outline',
				[`${baseName}--ghost`]: variant === 'ghost',
				[`${baseName}--icon-only`]: icon && iconOnly,
			},
			className,
		);

		if (!children) {
			throw new Error('Button components must always have children.');
		}

		this.label = this.getText(children);

		return (
			<BaseButton
				className={classes}
				title={title || this.label}
				ref={buttonRef}
				{...attributes}
			>
				{ this.IconLeft }
				{ this.Children }
				{ this.IconRight }
			</BaseButton>
		);
	}
}

export default Button;
