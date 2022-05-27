import classNames from 'classnames';
import React from 'react';
import { TabProps } from './types';

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(({
	baseName = 'nds-tabs__tab',
	className,
	children,
	id,
	selected = false,
	disabled = false,
	tabIndex,
	...props
}: TabProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);

	return (
		<button
			className={classes}
			{...props}
			ref={ref}
			type="button"
			role="tab"
			id={`tab${id}`}
			aria-selected={selected ? 'true' : 'false'}
			aria-disabled={disabled ? 'true' : 'false'}
			aria-controls={`panel${id}`}
		>
			{children}
		</button>
	);
});
