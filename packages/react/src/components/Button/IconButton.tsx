import React from 'react';
import { Button, ButtonProps } from './Button';

export type IconButtonProps = Omit<ButtonProps, 'iconOnly' | 'iconRight'>;

/**
 * Display an icon in a button. By default,`variant` is "ghost". Equivalent to
 * `<Button variant="ghost" iconOnly icon="...">...</Button>`.
 */
export const IconButton: React.FunctionComponent<IconButtonProps> = ({
	variant = 'ghost',
	children,
	...props
}: IconButtonProps) => (
	<Button
		iconOnly
		variant={variant}
		{...props}
	>
		{ children }
	</Button>
);
