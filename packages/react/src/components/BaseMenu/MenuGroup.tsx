import React from 'react';

export type BaseMenuGroupProps = Omit<React.HTMLAttributes<HTMLUListElement>, 'role'>;

export const BaseMenuGroup = React.forwardRef<HTMLUListElement, BaseMenuGroupProps>((
	props, ref,
) => (
	<li role="none">
		<ul ref={ref} {...props} role="group" />
	</li>
));
