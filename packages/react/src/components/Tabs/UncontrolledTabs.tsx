import classNames from 'classnames';
import React from 'react';
import { useTabs } from '../../utilities';
import { TabsProps } from './types';

export const UncontrolledTabs = React.forwardRef<HTMLDivElement, TabsProps>(({
	baseName = 'nds-tabs',
	className,
	...props
}: TabsProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);
	const { getChildren, handleClick } = useTabs(props);

	return (
		<div
			{...props}
			className={classes}
			ref={ref}
			onClick={props.onSelect}
		>
			{getChildren()}
		</div>
	);
});
