import classNames from 'classnames';
import React from 'react';
import { TabListProps } from './types';

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({
	baseName = 'nds-tab-list',
	className,
	...props
}: TabListProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);

	return (
		<div
			className={classes}
			{...props}
			ref={ref}
		/>
	);
});
