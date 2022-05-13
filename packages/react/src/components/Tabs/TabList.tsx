import classNames from 'classnames';
import React from 'react';
import { TabListProps } from './types';

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({
	baseName = 'nds-tab-list',
	className,
	role = 'tablist',
	...props
}: TabListProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);

	return (
		<div
			className={classes}
			role={role}
			{...props}
			ref={ref}
		/>
	);
});
