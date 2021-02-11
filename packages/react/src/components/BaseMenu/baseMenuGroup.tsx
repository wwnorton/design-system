import React from 'react';
import { BaseMenuDivider } from './baseMenuDivider';

export interface BaseMenuGroupProps extends React.LiHTMLAttributes<HTMLLIElement> {
	ariaLabel?:string,
}

export const BaseMenuGroup = React.forwardRef<HTMLLIElement, BaseMenuGroupProps>(({
	children,
}: BaseMenuGroupProps) => (
	<>
		<BaseMenuDivider />
		{ children }
		<BaseMenuDivider />
	</>
));
