import React from 'react';
import {
	BaseMenuGroup,
	BaseMenuGroupProps,
} from '../BaseMenu/baseMenuGroup';
import {
	MenuDivider,
} from './MenuDivider';

export interface MenuGroupProps extends BaseMenuGroupProps {
	baseName?: string;
}

export const MenuGroup = React.forwardRef<HTMLUListElement, MenuGroupProps>((
	{
		children,
		...props
	}: MenuGroupProps,
) => {
	if (!children) return null;
	return (
		<BaseMenuGroup
			{...props}
		>
			<MenuDivider />
			{children}
			<MenuDivider />
		</BaseMenuGroup>
	);
});
