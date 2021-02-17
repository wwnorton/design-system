import React from 'react';

export const BaseMenuDivider = React.forwardRef<HTMLElement>((props) => (
	<li
		aria-orientation="horizontal"
		role="separator"
		{...props}
	/>
));
