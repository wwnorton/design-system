import React from 'react';
import { prefix } from '../../config';
import { IconVariant, SVGIcon } from '../Icon';
import {
	BaseMenuItem,
	BaseMenuItemProps,
} from '../BaseMenu/baseMenuItem';

export type TargetVariant = '_self' | '_blank';

export interface MenuItemProps extends BaseMenuItemProps {
	/** The base class name according to BEM conventions. Default is "menu". */
	baseName?:string;
	/** An icon to include in the menu. */
	icon?: IconVariant | SVGIcon;
	/** Redirect to given URL */
	href?:string;
	/** Set target to open URL in same tab or different tab */
	target?:TargetVariant;
	/** Element ID */
	id?:string;
	/** The name of the menu item. Required. */
	label?:string;
	/** Description of menu item */
	description?:string;
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
