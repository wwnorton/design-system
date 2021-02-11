import React, { useState, useEffect, useCallback } from 'react';
import { IconVariant, SVGIcon } from '../Icon';
import { BaseMenuItem, BaseMenuItemProps } from './baseMenuItem';
import { BaseMenuDivider } from './baseMenuDivider';

export interface BaseMenuProps extends React.HTMLAttributes<HTMLUListElement> {
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
	selected?: React.ReactText | React.ReactText[];
	/** The initially focused index. Default is `0`. */
	initialFocusIndex?: number;
	isOpen?:boolean;
	selectedValues?:(selIndex: number, selectedValue: Record<string, unknown>) => void;
	anchorLeftPosition?:number;
	onClose?:() => void;
	/** Indicates whether clicking outside the menu should close the menu. */
	closeOnExternalClick?: boolean;
}

export const FocusOnHover = (childernCount: number):
React.Dispatch<React.SetStateAction<number>> => {
	const [currentFocus, setCurrentFocus] = useState(0);
	const handleKeyDown = useCallback(
		(e) => {
			if (e.keyCode === 40) {
				// Down arrow
				e.preventDefault();
				setCurrentFocus(currentFocus === childernCount - 1 ? 0 : currentFocus + 1);
			} else if (e.keyCode === 38) {
				// Up arrow
				e.preventDefault();
				setCurrentFocus(currentFocus === 0 ? childernCount - 1 : currentFocus - 1);
			} else if (e.keyCode === 13) {
				e.preventDefault();
				setCurrentFocus(currentFocus);
			}
		},
		[childernCount, currentFocus, setCurrentFocus],
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
		selectedValues,
		closeOnExternalClick = false,
		onClose,
		isOpen = false,
		anchorLeftPosition,
	}: BaseMenuProps,
): React.ReactElement => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const menuRef = React.useRef<HTMLUListElement>(null);
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

	const [focused, setFocused] = FocusOnHover(childrenProps.length + 1);
	const [selectedIndex, setSelectedIndex] = React.useState(-1);
	const selectedMenu = (selIndex: number, selectedValue: Record<string, unknown>) => {
		setSelectedIndex(selIndex);
		if (closeOnExternalClick) {
			setOpenMenu(false);
			if (onClose) {
				onClose();
			}
		}
		if (selectedValues) selectedValues(selIndex, selectedValue);
	};
	const documentClickHandler = React.useCallback((e: MouseEvent): void => {
		if (e && menuRef && menuRef.current) {
			if (closeOnExternalClick) {
				setOpenMenu(false);
				if (onClose) {
					onClose();
				}
			}
		}
	}, [menuRef, closeOnExternalClick, onClose]);

	useEffect(() => {
		setOpenMenu(isOpen);
		setFocused(0);
	}, [isOpen, setFocused]);

	// attach and detach document listeners
	React.useLayoutEffect(() => {
		document.addEventListener('click', documentClickHandler);
		return (): void => {
			document.removeEventListener('click', documentClickHandler);
		};
	}, [documentClickHandler]);

	/** The map of `BaseOption` components that will be rendered. */
	const MenuItems: JSX.Element[] = childrenProps.map((props) => {
		const childProps = props.children;
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
				<>
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
				</>
			);
		}
		return props.children;
	});
	const anchorPositionStyle = anchorLeftPosition
		? { position: 'fixed', left: anchorLeftPosition }
		: { left: 0 };
	return (
		<>
			{
				openMenu
					? (
						<ul
							id="menu2"
							role="menu"
							aria-labelledby="menubutton"
							className="nds-menu"
							style={anchorPositionStyle}
							ref={menuRef}
						>
							{MenuItems}
						</ul>
					)
					: null
			}
		</>
	);
});
// as React.ForwardRefExoticComponent<React.RefAttributes<HTMLUListElement>>
// & {
// 	MenuItem: typeof BaseMenuItem;
// 	errors: Record<string, string>;
// };

// BaseMenu.errors = {
// 	invalidChild: 'BaseMenu children must be MenuItem, MenuDivider or MenuGroup components.',
// 	noValue: 'MenuItem must contain Label',
// };
