import React, { useState, useEffect, useCallback } from 'react';
import { IconVariant, SVGIcon } from '../Icon';
import { BaseMenuItem, BaseMenuItemProps } from './MenuItem';
import { BaseMenuDivider } from './MenuDivider';
import { BaseMenuGroup } from './MenuGroup';

export interface BaseMenuProps extends React.HTMLAttributes<HTMLElement> {
	Label?: string
	icon?: IconVariant | SVGIcon;
	baseName?: string;
	iconClass?: string;
	/**
	 * The menuItem for the Menu, which can be either an array of strings,
	 * numbers, or `<BaseMenuItem>` elements.
	 */
	children?: React.ReactChild | React.ReactChild[];
	/** Callback function that is called when focus changes within the listbox. */
	selected?: boolean;
	/** The initially focused index. Default is `0`. */
	initialFocusIndex?: number;
	onClose?:(selIndex: number, selectedValue: Record<string, unknown>) => void;
	/** Indicates whether clicking outside the menu should close the menu. */
	closeOnExternalClick?: boolean;
	id?:string;
}

export const FocusOnHover = (childrenCount: number):
React.Dispatch<React.SetStateAction<number>> => {
	const [currentFocus, setCurrentFocus] = useState(0);
	const handleKeyDown = useCallback(
		(e) => {
			if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(e.key)) {
				e.preventDefault();
			}
			let nextFocus = 0;
			if (e.key === 'ArrowDown' || e.key === ' ') nextFocus = currentFocus === childrenCount - 1 ? 0 : currentFocus + 1;
			if (e.key === 'ArrowUp') nextFocus = currentFocus === 0 ? childrenCount - 1 : currentFocus - 1;
			if (e.key === 'Enter') nextFocus = currentFocus;
			if (e.key === 'End') nextFocus = childrenCount - 1;
			setCurrentFocus(nextFocus);
		},
		[childrenCount, currentFocus, setCurrentFocus],
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown, false);
		return () => {
			document.removeEventListener('keydown', handleKeyDown, false);
		};
	}, [handleKeyDown]);

	return [currentFocus, setCurrentFocus];
};

/**
 * A base `<ul>` component. Adds a callback for the DOM's `change` event
 * (`onDOMChange`), which does not exist in React.
 */
export const BaseMenu = React.forwardRef<HTMLUListElement, BaseMenuProps>((
	{
		children,
		onClose,
	}: BaseMenuProps,
): React.ReactElement => {
	let menuItemIndex = -1;
	/** A ref store for menuItem HTML elements. */
	const childrenProps = React.useMemo(() => {
		const menuItems = React.Children.map(children, (child) => {
			let props: BaseMenuItemProps;
			if (React.isValidElement(child)) {
				props = { value: child.props, children: child };
				return props;
			}
			return child;
		});
		return menuItems;
	}, [children]);

	const [focused, setFocused] = FocusOnHover(childrenProps ? childrenProps.length + 1 : 0);
	const [selectedIndex, setSelectedIndex] = React.useState(-1);
	const selectedMenu = (selIndex: number, selectedValue: Record<string, unknown>) => {
		setSelectedIndex(selIndex);
		if (onClose) onClose(selIndex, selectedValue);
	};

	useEffect(() => {
		setFocused(0);
	}, [setFocused]);

	/** Define function once calling conditional  */
	const renderMenuItems = (menuItemProps:Record<string, unknown>, elementName: string) => {
		if (!['MenuItem', 'MenuGroup', 'MenuDivider', 'MenuHeader'].includes(elementName)) {
			throw new Error(BaseMenu.errors.invalidChild);
		}
		return (
			<BaseMenuItem
				key={`Menu${menuItemIndex}`}
				index={menuItemIndex}
				focus={focused === menuItemIndex}
				selectedMenu={selectedMenu}
				selected={menuItemIndex === selectedIndex}
				{...menuItemProps}
			/>
		);
	};

	/** The map of `MenuItem` components that will be rendered. */
	const MenuItems: JSX.Element[] = childrenProps.map((props) => {
		const childProps = props.children;
		if (childProps.type.displayName === 'MenuItem') {
			menuItemIndex += 1;
			return renderMenuItems(props.value, childProps.type.displayName);
		} else if (childProps.type.displayName === 'MenuGroup') { // eslint-disable-line  no-else-return
			return (
				<BaseMenuGroup key={`MenuGrp${menuItemIndex}`}>
					<BaseMenuDivider />
					{
						React.Children.map(childProps.props.children, (childOfChild) => {
							menuItemIndex += 1;
							return renderMenuItems(childOfChild.props, childOfChild.type.displayName);
						})
					}
					<BaseMenuDivider />
				</BaseMenuGroup>
			);
		}
		return props.children;
	});

	return (
		<>
			{MenuItems}
		</>
	);
}) as React.ForwardRefExoticComponent<React.RefAttributes<HTMLUListElement>>
& {
	errors: Record<string, string>;
};

BaseMenu.errors = {
	invalidChild: 'BaseMenu children must be MenuItem, MenuDivider, MenuGroup or MenuHeader components.',
};
