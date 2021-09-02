import { AllColors } from '../../utilities/color';
import { BaseButtonProps } from '../BaseButton';
import { IconVariant, SVGIcon } from '../Icon';
import { TooltipCoreProps } from '../Tooltip/types';

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
	/** Set the loading status of button */
	loading?: boolean;
}
