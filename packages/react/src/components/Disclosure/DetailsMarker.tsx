import React from 'react';
import classNames from 'classnames';

export type DetailsMarkerVariant = 'caret' | 'chevron';

interface MarkerIcon {
	viewbox: string;
	d: string;
	source: string;
}

const markerIcons: Record<DetailsMarkerVariant, MarkerIcon> = {
	caret: {
		viewbox: '0 0 192 512',
		d: 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z',
		source: 'https://fontawesome.com/icons/caret-right?style=solid',
	},
	chevron: {
		viewbox: '0 0 448 512',
		d: 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z',
		source: 'https://fontawesome.com/icons/chevron-down?style=solid',
	},
};

export interface DetailsMarkerProps extends React.SVGAttributes<SVGSVGElement> {
	/** The type of details marker. */
	variant?: DetailsMarkerVariant;
}

const DetailsMarker = React.forwardRef<SVGSVGElement, DetailsMarkerProps>(({
	variant = 'caret',
	className,
	...attributes
}: DetailsMarkerProps, ref) => {
	const { viewbox, d } = markerIcons[variant];

	return (
		<svg
			ref={ref}
			aria-hidden="true"
			focusable="false"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewbox}
			className={classNames(className, variant)}
			{...attributes}
		>
			{'<!-- https://fontawesome.com/license -->'}
			<path fill="currentColor" d={d} />
		</svg>
	);
});

export default DetailsMarker;
