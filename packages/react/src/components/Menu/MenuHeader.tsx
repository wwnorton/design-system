import React from 'react';
import {
	BaseMenuHeader,
	BaseMenuHeaderProps,
} from '../BaseMenu/baseMenuHeader';

export type TargetVariant = '_self' | '_blank';

export interface MenuHeaderProps extends BaseMenuHeaderProps {
	label?:string;
}

export const MenuHeader = React.forwardRef<HTMLLIElement, BaseMenuHeaderProps>((
	{
		...props
	}: MenuHeaderProps,
) => (
	<BaseMenuHeader
		{...props}
	/>
));
