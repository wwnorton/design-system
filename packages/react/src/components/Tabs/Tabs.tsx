import classNames from 'classnames';
import React from 'react';
import { TabsProps } from './types';

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({
	baseName = 'nds-tabs',
	className,
	children,
	...props
}: TabsProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);

	if (!children) return null;
	return (
		<div
			className={classes}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	);
});
