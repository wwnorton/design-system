import React, { useState } from 'react';
import { prefix } from '../../config';
import { BasePopper, BasePopperProps } from '../BasePopper';
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

import { useForwardedRef, usePopperTriggers } from '../../hooks';

export type Triggers =
	| 'click'
	| 'focus'
	| 'focusin'
	| 'manual'
	| 'mouseenter'
	| 'pointerenter'
export interface MenuProps extends BasePopperProps, BaseMenuProps {
	/** The base class name according to BEM conventions. Default is "menu". */
	baseName?:string;
	/** Generate menu dynamically as per the JSON */
	/** JSON format should be {
		menuItems: [{
			label: 'Overview',
			description: 'Overview menu',
		},
		{
		 ...
		}
	} */
	JsonMenu?:Record<string, unknown>;
	/** Menu only expect Menuitem, MenuDivider, MenuGroup and MenuHeader element */
	children?: React.ReactChild | React.ReactChild[] ;
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the menu's visibility must be
	 * controlled via `isOpen`. Default is `"click"`.
	 */
	trigger?: string;
	/** Menu id */
	id?:string;
	/** By default menu width is auto this property set max width of the menu */
	maxWidth?:number;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>((
	{
		baseName = prefix('menu'),
		children,
		isOpen = false,
		placement = 'bottom-start',
		reference,
		maxWidth,
		id = 'menu',
		trigger = 'click',
		JsonMenu,
		...props
	}: MenuProps, ref,
) => {
	const [ariaLabel, setAriaLabel] = useState('');
	const [popper, setPopper] = useForwardedRef(ref);
	const open = usePopperTriggers({
		reference, popper, trigger, isOpen,
	});

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

	React.useEffect(() => {
		if (ariaLabel && reference && reference instanceof HTMLElement) {
			setAriaLabel(reference.innerText);
		}
	}, [ariaLabel, reference]);

	if (!children && !JsonMenu) return null;

	return (
		<BasePopper
			aria-hidden={!open}
			role="menu"
			className={baseName}
			tagName="ul"
			placement={placement}
			reference={reference}
			isOpen={open}
			aria-label={ariaLabel}
			trigger='manual'
			aria-orientation="vertical"
			style={{ maxWidth }}
			id={id}
			ref={setPopper}
			{...props}
		>
			<BaseMenu
				baseName={baseName}
				{...props}
			>
				{children || JsonMenuData}
			</BaseMenu>
		</BasePopper>
	);
});
