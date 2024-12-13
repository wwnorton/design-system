import React from 'react';
import { BaseDetailsProps } from './types';

export const BaseDetails = React.forwardRef<HTMLDetailsElement, BaseDetailsProps>(
	({ children, ...props }: BaseDetailsProps, ref) => (
		<details ref={ref} {...props}>
			{children}
		</details>
	),
);
