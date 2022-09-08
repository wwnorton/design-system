import { BaseSVGProps } from '../BaseSVG';
import { TooltipCoreProps } from '../Tooltip';

export interface SVGIcon {
	d?: string;
	fullName?: string;
	originalName?: string;
	viewBox?: '0 0 24 24';
	source?: string;
	children?: React.ReactNode;
	label?: string;
}

export type IconVariant =
	| 'account'
	| 'arrow-up'
	| 'arrow-right'
	| 'arrow-down'
	| 'arrow-left'
	| 'calendar'
	| 'cancel'
	| 'caret-up'
	| 'caret-down'
	| 'caret-right'
	| 'caret-left'
	| 'check'
	| 'check-circle'
	| 'chevron-up'
	| 'chevron-right'
	| 'chevron-down'
	| 'chevron-left'
	| 'close'
	| 'delete'
	| 'download'
	| 'edit'
	| 'exclamation'
	| 'heart'
	| 'heart-outline'
	| 'flag'
	| 'info'
	| 'launch'
	| 'list'
	| 'menu'
	| 'minus'
	| 'minus-circle'
	| 'more-horizontal'
	| 'more-vertical'
	| 'plus'
	| 'plus-circle'
	| 'print'
	| 'save'
	| 'search'
	| 'settings'
	| 'star'
	| 'star-outline'
	| 'subdirectory-left'
	| 'subdirectory-right'
	| 'warning';

export interface IconProps extends BaseSVGProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** The specific icon that you'd like to use. */
	variant?: IconVariant;
	/** A custom icon. Must contain the SVG path's `d` attribute at a minimum. */
	icon?: SVGIcon;
	/** The icon's color. Default is `currentColor`. */
	color?: string;
	/** The width and height of the icon. Default is `1.25em`. */
	size?: string | number;
	/**
	 * Indicates whether a console warning should be emitted when an `onClick`
	 * callback is specified. Set to `true` by default to discourage actionable
	 * icons, which will be inaccessible to many users.
	 */
	warnOnClick?: boolean;
	/**
	 * Tooltip props that should be included when the icon's children are
	 * rendered as a tooltip.
	 */
	tooltipProps?: Partial<TooltipCoreProps>;
}
