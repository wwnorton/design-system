import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Icon, IconVariant, SVGIcon } from '../Icon';
import { prefix } from '../../config';

export type TargetVariant = '_self' | '_blank';

export interface BaseMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	label?: string
	icon?: IconVariant | SVGIcon;
	baseName?: string;
	iconClass?: string;
	description?:string;
	selected?:boolean;
	focus?:boolean;
	index?:number;
	disabled?:boolean;
	selectedMenu?: (selIndex: number, selectedValue:Record<string, unknown>) => void;
	href?:string | undefined;
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

	const descriptionClass = `nds-menuitem-description ${icon ? 'nds-menuitem__icon' : ''}`;
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
	const ItemClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
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
	};
	const ItemKeyPressHandler = (e: React.KeyboardEvent<HTMLLIElement>) => {
		if (e.keyCode === 13) {
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
	};
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
					target={target}
					href={href}
				>
					{menuItemDetails}
				</a>
			);
		}
		return menuItemDetails;
	}, [description, icon, BaseIcon, label, href, target, descriptionClass]);

	return (
		<li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
			id={id || `menu${index}`}
			role={!href ? 'menuitem' : 'none'}
			ref={ref}
			tabIndex={focus ? 0 : -1} // eslint-disable-line  jsx-a11y/no-noninteractive-tabindex
			className={classes}
			onClick={ItemClickHandler}
			onKeyUp={ItemKeyPressHandler}
			{...props}
		>
			{menuitemWithLink}
		</li>
	);
});
