import React from 'react';
import classNames from 'classnames';
import findIcon, { IconVariant, SVGIcon, materialDefaults } from '../../utilities/icons';
import BaseSVG, { BaseSVGProps } from '../BaseSVG';

export interface IconProps extends BaseSVGProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** A descriptive label for the icon. Will be set as the aria-label. */
	label?: string;
	/** The specific icon that you'd like to use. */
	variant?: IconVariant;
	/** A custom icon. Must contain the SVG path's `d` attribute at a minimum. */
	icon?: SVGIcon;
	/**
	 * Indicates whether a console warning should be emitted when an `onClick`
	 * callback is specified. Set to `true` by default to discourage actionable
	 * icons, which will be inaccessible to many users.
	 */
	warnOnClick?: boolean;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
	baseName = 'icon',
	label,
	variant,
	height: heightProp,
	width,
	className,
	icon: iconProp,
	onClick,
	warnOnClick = true,
	...attributes
}: IconProps, ref) => {
	const svgRef = (ref || React.useRef<SVGSVGElement>()) as React.RefObject<SVGSVGElement>;
	const [height, setHeight] = React.useState<typeof heightProp>();

	React.useEffect(() => {
		if (svgRef.current) {
			const heightAttr = svgRef.current.getAttribute('height');
			if (heightProp) {
				if (heightAttr !== heightProp) setHeight(heightProp);
				return;
			}
			const cssHeight = parseInt(window.getComputedStyle(svgRef.current).height, 10);
			if (cssHeight) {
				setHeight(undefined);
			} else if (!heightProp && !width) {
				setHeight('1.25rem');
			} else {
				setHeight(heightProp);
			}
		}
	}, [heightProp, svgRef, width]);

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
		name,
		source,
		viewBox = materialDefaults.viewBox,
	} = icon;

	return (
		<BaseSVG
			ref={svgRef}
			source={source}
			viewBox={viewBox}
			height={height}
			width={width}
			className={classNames(baseName, `${baseName}--${name}`, className)}
			aria-label={label || undefined}
			aria-hidden={(!label) ? 'true' : undefined}
			focusable="false"
			role="img"
			onClick={onClick}
			{...attributes}
		>
			<path fill="currentColor" d={d} />
		</BaseSVG>
	);
});

export default Icon;
