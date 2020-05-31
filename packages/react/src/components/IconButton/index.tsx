import React from 'react';
import { Button, ButtonProps } from '../Button';

export type IconButtonProps = Omit<ButtonProps, 'iconOnly' | 'iconRight'>;

/**
 * Display an icon in a button. A textual label is required and will be used as
 * both the `title` (tooltip) and as the image's accessible name (alt text).
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
