import React from 'react';
import { useForwardedRef } from '../../utilities/hooks';

export interface BaseSVGProps extends React.SVGAttributes<SVGSVGElement> {
	/** A URL or reference to the source of this SVG. */
	source?: string;
}

const BaseSVG = React.forwardRef<SVGSVGElement, BaseSVGProps>(({
	source,
	children,
	...attributes
}: BaseSVGProps, ref) => {
	const svg = useForwardedRef(ref);
	React.useEffect(() => {
		if (svg.current && source) {
			svg.current.prepend(document.createComment(source));
		}
	}, [source, svg]);
	return (
		<svg ref={svg} xmlns="http://www.w3.org/2000/svg" {...attributes}>
			{ children }
		</svg>
	);
});

export default BaseSVG;
