import React from 'react';
import classNames from 'classnames';
import { findIcon, viewBox as defaultViewBox } from './icons';
import { useForwardedRef } from '../../utilities';
import { BaseSVG } from '../BaseSVG';
import { Tooltip } from '../Tooltip';
import { IconProps } from './types';

/**
 * An icon component. Children are assumed to be the icon's label and will be
 * rendered in an accessible tooltip.
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
	(
		{
			baseName = 'nds-icon',
			className,
			color = 'currentColor',
			icon: iconProp,
			size = '1.25em',
			variant,
			warnOnClick = true,
			tooltipProps,
			onClick,
			'aria-label': ariaLabel,
			children,
			...props
		}: IconProps,
		ref,
	) => {
		if (onClick && warnOnClick) {
			// eslint-disable-next-line no-console
			console.warn(
				"You've attached a click listener to an icon, which will be inaccessible to many users. " +
					'Use the Button or IconButton component instead.',
			);
		}
		const [svg, setSvg] = useForwardedRef(ref);

		const ariaHidden = React.useMemo(() => {
			if (children) return undefined;
			if (!ariaLabel) return true;
			return undefined;
		}, [ariaLabel, children]);

		const icon = iconProp || findIcon(variant);

		const tooltip = React.useMemo(() => {
			if (!children) return null;
			return (
				<Tooltip asLabel reference={svg} {...tooltipProps}>
					{children}
				</Tooltip>
			);
		}, [children, tooltipProps, svg]);

		if (!icon) {
			// TODO: warn/error if no icon was found?
			return null;
		}
		const { d, source, viewBox = defaultViewBox, children: svgChildren, label } = icon;

		const classes = classNames(
			baseName,
			{
				[`${baseName}--${variant}`]: variant,
			},
			className,
		);

		return (
			<>
				<BaseSVG
					ref={setSvg}
					source={source}
					viewBox={viewBox}
					height={size}
					width={size}
					style={{ minWidth: size }}
					className={classes}
					aria-label={ariaLabel || label}
					aria-hidden={ariaHidden}
					focusable="false"
					tabIndex={children ? 0 : undefined}
					role="img"
					fill={color}
					{...props}
				>
					{d && <path d={d} aria-hidden="true" />}
					{svgChildren}
				</BaseSVG>
				{tooltip}
			</>
		);
	},
);
