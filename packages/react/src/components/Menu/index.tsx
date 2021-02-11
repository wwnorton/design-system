import React from 'react';
import { prefix } from '../../config';
import {
	BaseMenu,
	BaseMenuProps,
} from '../BaseMenu';
import {
	MenuItemProps,
	MenuItem,
} from './MenuItem';

import {
	MenuDivider,
} from './MenuDivider';

export interface menuItemJsonStructure extends MenuItemProps{
	menuDivider?:boolean;
}

export interface MenuJsonData {
	menuItems:menuItemJsonStructure[]
}

export interface MenuProps extends BaseMenuProps {
	/** The base class name according to BEM conventions. Default is "menu". */
	baseName?:string;
	/** Indicates whether the menu is open. */
	isOpen?:boolean;
	/** Return selected menuitem properties  */
	selectedValues?:(selIndex: number, selectedValue: Record<string, unknown>) => void;
	/** Display menu according to element alignment */
	anchorLeftPosition?:number;
	/** On close on external element click */
	onClose?:() => void;
	/** Generate menu dynamically as per the JSON */
	/** JSON format should be {
		// menuItems: [{
		// 	label: 'Overview',
		// 	description: 'Overview menu',
		// },
		// {
		//  ...
		// }
	// } */
	JsonMenu?:MenuJsonData;
	/** Menu only expect Menuitem, MenuDivider, MenuGroup and MenuHeader element */
	children?: React.ReactChild[];
	/** Indicates whether clicking outside the menu should close the menu. */
	closeOnExternalClick?: boolean;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>((
	{
		baseName = prefix('menu'),
		children,
		isOpen = false,
		selectedValues,
		JsonMenu,
		anchorLeftPosition,
		...props
	}: MenuProps,
) => {
	const JsonMenuData = React.useMemo(() => {
		if (!JsonMenu) return null;
		return JsonMenu.menuItems.map((item) => {
			if (item && !item.menuDivider) {
				return (
					<MenuItem
						{...item}
					/>
				);
			}
			return <MenuDivider />;
		});
	}, [JsonMenu]);

	return (
		<BaseMenu
			baseName={baseName}
			selectedValues={selectedValues}
			anchorLeftPosition={anchorLeftPosition}
			isOpen={isOpen}
			{...props}
		>
			{children || JsonMenuData}
		</BaseMenu>
	);
});
