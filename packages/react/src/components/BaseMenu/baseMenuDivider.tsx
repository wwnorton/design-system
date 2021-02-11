import React from 'react';

export const BaseMenuDivider = React.forwardRef<HTMLElement>(({
	...props
}) => (
	<li
		className='nds-menu-divider'
		role="separator"
		{...props}
	/>
));
