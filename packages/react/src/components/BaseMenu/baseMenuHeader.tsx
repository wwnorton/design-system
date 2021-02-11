import React from 'react';

export interface BaseMenuHeaderProps extends React.LiHTMLAttributes<HTMLLIElement> {
	label?:string
}

export const BaseMenuHeader = React.forwardRef<HTMLLIElement, BaseMenuHeaderProps>(({
	label,
	...attributes
}: BaseMenuHeaderProps, ref) => (
	<li
		className='nds-menuheader'
		ref={ref}
		{...attributes}
	>
		<span>{label}</span>
	</li>
));
