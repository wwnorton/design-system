import React from 'react';
import { Button, ButtonProps } from '../Button';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface MenuButtonProps extends ButtonProps {
	baseName?: string;
	onOpen?: () => void;
	variant?:ButtonVariant;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(({
	onOpen,
	variant = 'outline',
	...props
}: MenuButtonProps, ref) => {
	const [isOpen, setOpen] = React.useState(false);

	const onMenuButtonClick = () => {
		setOpen(!isOpen);
		if (onOpen) onOpen();
	};

	return (
		<Button
			aria-expanded={isOpen}
			aria-haspopup="menu"
			variant={variant}
			ref={ref}
			onClick={onMenuButtonClick}
			{...props}
		/>
	);
});
