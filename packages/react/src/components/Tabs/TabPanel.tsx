import classNames from 'classnames';
import React from 'react';
import { TabPanelProps } from './types';

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({
	baseName = 'nds-tabs__tab-panel',
	className,
	children,
	id,
	selected = false,
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
			role="tabpanel"
			id={`panel${id}`}
			aria-labelledby={`tab${id}`}
		>
			{selected ? children : null}
		</div>
	);
});
