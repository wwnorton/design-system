import classNames from 'classnames';
import React from 'react';
import { TabPanelProps } from './types';

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({
	baseName = 'nds-tab-panel',
	className,
	...props
}: TabPanelProps, ref) => {
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
