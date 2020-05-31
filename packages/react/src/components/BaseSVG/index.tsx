import React from 'react';

export interface BaseSVGProps extends React.SVGAttributes<SVGSVGElement> {
	/** A URL or reference to the source of this SVG. */
	source?: string;
}

export const BaseSVG = React.forwardRef<SVGSVGElement, BaseSVGProps>(({
	source,
	children,
	...attributes
}: BaseSVGProps, ref) => (
	<svg
		ref={ref}
		xmlns="http://www.w3.org/2000/svg"
		data-source={source}
		{...attributes}
	>
		{ children }
	</svg>
));
