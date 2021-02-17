import React from 'react';
import {
	BaseMenuItem,
	BaseMenuItemProps,
} from '../BaseMenu/MenuItem';

export interface MenuItemProps extends BaseMenuItemProps {
	/** Element ID */
	id?:string;
}

export const MenuItem = React.forwardRef<HTMLLIElement, BaseMenuItemProps>((
	{
		...props
	}: MenuItemProps,
) => (
	<BaseMenuItem
		{...props}
	/>
));
