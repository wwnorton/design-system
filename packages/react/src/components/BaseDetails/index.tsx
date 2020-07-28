import React from 'react';

export type BaseDetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement>;

export const BaseDetails = React.forwardRef<HTMLDetailsElement, BaseDetailsProps>(({
	children,
	...attributes
}: BaseDetailsProps, ref) => (
	<details ref={ref} {...attributes}>
		{ children }
	</details>
));
