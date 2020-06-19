import React from 'react';
import classNames from 'classnames';
import {
	findIcon, IconVariant, SVGIcon, viewBox as defaultViewBox,
} from '../../utilities';
import { BaseSVG, BaseSVGProps } from '../BaseSVG';

export interface IconProps extends BaseSVGProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** The specific icon that you'd like to use. */
	variant?: IconVariant;
	/** A custom icon. Must contain the SVG path's `d` attribute at a minimum. */
	icon?: SVGIcon;
	/** The icon's color. Default is `currentColor`. */
	color?: string;
	/** The width and height of the icon. Default is `1.25rem`. */
	size?: string | number;
	/**
	 * Indicates whether a console warning should be emitted when an `onClick`
	 * callback is specified. Set to `true` by default to discourage actionable
	 * icons, which will be inaccessible to many users.
	 */
	warnOnClick?: boolean;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
	baseName = 'icon',
	className,
	color = 'currentColor',
	icon: iconProp,
	size = '1.25rem',
	variant,
	warnOnClick = true,
	onClick,
	'aria-label': ariaLabel,
	...attributes
}: IconProps, ref) => {
	if (onClick && warnOnClick) {
		// eslint-disable-next-line no-console
		console.warn(
			'You\'ve attached a click listener to an icon, which will be inaccessible to many users.'
			+ 'You probably want to use the IconButton component instead.',
		);
	}

	const icon = iconProp || findIcon(variant);

	if (!icon) {
		// TODO: warn/error if no icon was found?
		return null;
	}
	const {
		d,
		source,
		viewBox = defaultViewBox,
	} = icon;

	const classes = classNames(baseName, {
		[`${baseName}--${variant}`]: variant,
	}, className);

	return (
		<BaseSVG
			ref={ref}
			source={source}
			viewBox={viewBox}
			height={size}
			width={size}
			className={classes}
			aria-label={ariaLabel}
			aria-hidden={(!ariaLabel) ? 'true' : undefined}
			focusable="false"
			role="img"
			fill={color}
			onClick={onClick}
			{...attributes}
		>
			<path d={d} />
		</BaseSVG>
	);
});
