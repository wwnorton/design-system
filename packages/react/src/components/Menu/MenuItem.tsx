import React from 'react';
import { prefix } from '../../config';
import {
	BaseMenuItem,
	BaseMenuItemProps,
} from '../BaseMenu/baseMenuItem';

export interface MenuItemProps extends BaseMenuItemProps {
	/** The base class name according to BEM conventions. Default is "menu". */
	baseName?:string;
	/** Element ID */
	id?:string;
}

export const MenuItem = React.forwardRef<HTMLLIElement, BaseMenuItemProps>((
	{
		baseName = prefix('menuitem'),
		...props
	}: MenuItemProps,
) => (
	<BaseMenuItem
		baseName={baseName}
		{...props}
	/>
));
