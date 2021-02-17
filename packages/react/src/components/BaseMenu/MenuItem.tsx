import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { prefix } from '../../config';

export type TargetVariant = '_self' | '_blank';

function assign<T, U>(target: T, source: U): asserts target is T & U {
	Object.assign(target, source);
}
export interface BaseMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	/** The name of the menu item. Required. */
	label: string
	/** An icon to include in the menu. */
	icon?: IconVariant | SVGIcon;
	baseName?: string;
	iconClass?: string;
	/** Description of menu item */
	description?:string;
	/**
	 * Added property for selected menu
	 */
	selected?:boolean;
	/** focus set for mouse or keyboard events */
	focus?:boolean;
	/** selected menu item index */
	index?:number;
	/** Disabled menu item can not click or select  */
	disabled?:boolean;
	/** Return selected properties on onClose event */
	selectedMenu?: (selIndex: number, selectedValue:Record<string, unknown>) => void;
	/** URL path to redirect */
	href?:string | undefined;
	/** Redirect to given URL */
	target?:TargetVariant;
	id?:string;
}

/**
 * A base `<ul>` component. Adds a callback for the DOM's `change` event
 * (`onDOMChange`), which does not exist in React.
 */
export const BaseMenuItem = React.forwardRef<HTMLLIElement, BaseMenuItemProps>((
	{
		baseName = prefix('menuitem'),
		label,
		icon,
		focus,
		index = 0,
		disabled = false,
		target,
		description,
		href,
		selectedMenu,
		id,
		selected = false,
		iconClass = `${baseName}__icon`,
		...props
	}: BaseMenuItemProps,
): React.ReactElement => {
	if (!label) throw new Error(BaseMenuItem.errors.noLabel);
	const ref = useRef(null);
	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const descriptionClass = `${baseName}-description ${icon ? `${baseName}__icon` : ''}`;
	useEffect(() => {
		if (ref
		&& ref.current
		&& ref.current.tabIndex === 0) {
			ref.current.focus();
		}
	}, [focus]);

	const classes = classNames(
		{
			[`${baseName}-selected`]: selected,
			[`${baseName}-disabled`]: disabled,
		},
		baseName,
	);
	const ItemClickHandler = React.useCallback((e:
	React.MouseEvent<HTMLLIElement, MouseEvent>):
	void => {
		if (e && selectedMenu && disabled === false) {
			selectedMenu(index, {
				label,
				description,
				href,
				target,
				id,
				currentIndex: index,
			});
		}
	}, [label, description, href, target, id, index, selectedMenu, disabled]);

	const ItemKeyPressHandler = React.useCallback((e: React.KeyboardEvent<HTMLLIElement>) => {
		if (e.key === 'Enter') {
			if (selectedMenu && disabled === false) {
				const selectedProps = {
					label,
					description,
					href,
					target,
					id,
					currentIndex: index,
				};
				selectedMenu(index, selectedProps);
			}
		}
	}, [label, description, href, target, id, index, selectedMenu, disabled]);

	/** Due to enter key not working
	 *  Removed in future.
	*/
	const menuItemAnchorClick = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
		if (e.key === 'Enter') {
			e.currentTarget.click();
		}
	};

	const menuItemProps = React.useMemo(() => {
		const menuItemCustomProps = { ...props };
		assign(menuItemCustomProps, { role: !href ? 'menuitem' : 'none' });
		if (!href) {
			assign(menuItemCustomProps, { onClick: ItemClickHandler });
			assign(menuItemCustomProps, { onKeyUp: ItemKeyPressHandler });
			assign(menuItemCustomProps, { tabIndex: focus ? 0 : -1 });
			assign(menuItemCustomProps, { className: classes });
			assign(menuItemCustomProps, { 'aria-disabled': disabled });
		}
		return menuItemCustomProps;
	}, [href, ItemClickHandler, ItemKeyPressHandler, classes, focus, props, disabled]);

	const menuitemWithLink = React.useMemo(() => {
		const menuItemDetails = (
			<>
				{
					icon
						? BaseIcon
						: null
				}
				{label}
				{description
					? (
						<div
							className={descriptionClass}
						>
							{ description }
						</div>
					)
					: null}
			</>
		);
		if (href) {
			return (
				<a
					role="menuitem"
					className={classes}
					tabIndex={focus ? 0 : -1}
					aria-disabled={disabled}
					target={target}
					href={href}
					onKeyUp={menuItemAnchorClick}
					ref={(item): void => {
						if (focus && item) item.focus();
					}}
				>
					{menuItemDetails}
				</a>
			);
		}
		return menuItemDetails;
	}, [description, icon, BaseIcon,
		label, href, target, descriptionClass,
		focus, classes, disabled]);

	return (
		<li
			key={id || `menu${index}`}
			id={id || `menu${index}`}
			ref={ref}
			{...menuItemProps}
		>
			{menuitemWithLink}
		</li>
	);
}) as React.ForwardRefExoticComponent<React.RefAttributes<HTMLLIElement>>
& {
	errors: Record<string, string>;
};

BaseMenuItem.errors = {
	noLabel: 'Menu must have a Label.',
};
