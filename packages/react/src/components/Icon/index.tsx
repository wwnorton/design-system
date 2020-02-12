import React from 'react';
import classNames from 'classnames';
import findIcon, { IconVariant } from '../../utilities/icons';
import BaseSVG, { BaseSVGProps } from '../BaseSVG';

export interface IconProps extends BaseSVGProps {
	/** The base class name according to BEM conventions */
	baseName?: string;
	/** A descriptive label for the icon. Will be set as the aria-label. */
	label?: string;
	/** The specific icon that you'd like to use. */
	variant: IconVariant;
	/** A ref to the internal SVG. */
	svgRef?: React.Ref<SVGSVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = ({
	baseName = 'icon',
	label,
	variant,
	svgRef,
	height,
	width,
	className,
	...attributes
}: IconProps) => {
	const icon = findIcon(variant);

	if (!icon) {
		// TODO: warn/error if no icon was found?
		return null;
	}

	const {
		d,
		name,
		source,
		viewBox,
	} = icon;

	return (
		<BaseSVG
			ref={svgRef}
			source={source}
			viewBox={viewBox}
			height={(!height && !width) ? '1.5rem' : height}
			width={width}
			className={classNames(baseName, `${baseName}--${name}`, className)}
			aria-label={label || undefined}
			aria-hidden={(!label) ? 'true' : undefined}
			focusable="false"
			role="img"
			{...attributes}
		>
			<path fill="currentColor" d={d} />
		</BaseSVG>
	);
};

export default Icon;
