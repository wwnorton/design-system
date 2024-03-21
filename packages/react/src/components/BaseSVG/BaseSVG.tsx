import React from 'react';
import { BaseSVGProps } from './types';

export const BaseSVG = React.forwardRef<SVGSVGElement, BaseSVGProps>(
	({ source, children, ...props }: BaseSVGProps, ref) => (
		<svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" data-source={source}>
			{children}
		</svg>
	),
);
