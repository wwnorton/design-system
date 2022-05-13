import classNames from 'classnames';
import React from 'react';
import { TabPanelsProps } from './types';

export const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(({
	baseName = 'nds-tab-panels',
	className,
	...props
}: TabPanelsProps, ref) => {
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
