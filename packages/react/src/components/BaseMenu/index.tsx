import React, { useState, useEffect, useCallback } from 'react';
import { IconVariant, SVGIcon } from '../Icon';
import { BaseMenuItem, BaseMenuItemProps } from './baseMenuItem';
import { BaseMenuDivider } from './baseMenuDivider';
import { BaseMenuGroup } from './baseMenuGroup';

export interface BaseMenuProps extends React.HTMLAttributes<HTMLElement> {
	Label?: string
	icon?: IconVariant | SVGIcon;
	baseName?: string;
	iconClass?: string;
	/**
	 * The menuITem for the Menu, which can be either an array of strings,
	 * numbers, or `<BaseMenuItem>` elements.
	 */
	children?: React.ReactChild[];
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

	/** The map of `BaseOption` components that will be rendered. */
	const MenuItems: JSX.Element[] = childrenProps.map((props) => {
		const childProps = props.children;

		if (!['MenuItem', 'MenuGroup', 'MenuDivider', 'MenuHeader'].includes(childProps.type.displayName)) {
			throw new Error(BaseMenu.errors.invalidChild);
		}
		if (childProps.type.displayName === 'MenuItem') {
			menuItemIndex += 1;
			return (
				<BaseMenuItem
					index={menuItemIndex}
					focus={focused === menuItemIndex}
					selectedIndex={selectedIndex}
					selectedMenu={selectedMenu}
					selected={menuItemIndex === selectedIndex}
					{...props.value}
				/>
			);
		} else if (childProps.type.displayName === 'MenuGroup') { // eslint-disable-line  no-else-return
			return (
				<BaseMenuGroup>
					<BaseMenuDivider />
					{
						React.Children.map(childProps.props.children, (childOfChild) => {
							menuItemIndex += 1;
							return (
								<BaseMenuItem
									index={menuItemIndex}
									focus={focused === menuItemIndex}
									selectedIndex={selectedIndex}
									selectedMenu={selectedMenu}
									selected={menuItemIndex === selectedIndex}
									{...childOfChild.props}
								/>
							);
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
