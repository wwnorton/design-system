import React from 'react';
import classNames from 'classnames';
import { StepIndicatorProps } from './types';

export const StepIndicator = React.forwardRef<HTMLOListElement, StepIndicatorProps>(({
	baseName = 'nds-step-indicator',
	className,
	children,
	...props
}: StepIndicatorProps, ref) => {
	const classes = classNames(
		className,
		baseName,
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
