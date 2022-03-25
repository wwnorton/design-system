import React from 'react';
import classNames from 'classnames';
import { StepIndicatorProps } from './types';

export const StepIndicator = React.forwardRef<HTMLOListElement, StepIndicatorProps>(({
	baseName = 'nds-step-indicator',
	connected = true,
	className,
	children,
	...props
}: StepIndicatorProps, ref) => {
	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--connected`]: connected,
		},
	);
	if (!children) return null;
	return (
		<ol
			className={classes}
			{...props}
			ref={ref}
		>
			{children}
		</ol>
	);
});
