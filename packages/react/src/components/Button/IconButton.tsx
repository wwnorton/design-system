import React from 'react';
import { Button } from './Button';
import { IconButtonProps } from './types';

/**
 * Display an icon in a button. By default,`variant` is "ghost". Equivalent to
 * `<Button variant="ghost" iconOnly icon="...">...</Button>`.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
	variant = 'ghost',
	children,
	...props
}: IconButtonProps, ref) => (
	<Button
		iconOnly
		variant={variant}
		ref={ref}
		{...props}
	>
		{ children }
	</Button>
));
