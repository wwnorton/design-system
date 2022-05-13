import classNames from 'classnames';
import React from 'react';
import { TabProps } from './types';

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(({
	baseName = 'nds-tab',
	className,
	role = 'tab',
	...props
}: TabProps, ref) => {
	const classes = classNames(
		className,
		baseName,
	);

	return (
		<button
			className={classes}
			type="button"
			role={role}
			{...props}
			ref={ref}
		/>
	);
});
