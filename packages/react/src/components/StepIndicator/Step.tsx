import React from 'react';
import classNames from 'classnames';
import { StepProps } from './types';
import { Icon } from '../Icon';

export const Step = React.forwardRef<HTMLLIElement, StepProps>(({
	baseName = 'nds-step',
	markerContainerClass = `${baseName}__marker-container`,
	markerClass = `${baseName}__marker`,
	contentsClass = `${baseName}__content`,
	className,
	children,
	isComplete,
	isCurrent,
	...props
}: StepProps, ref) => {
	const baseClasses = classNames(
		baseName,
		className,
	);

	const markerClasses = classNames(
		markerClass,
		{
			[`${markerClass}--complete`]: isComplete,
			[`${markerClass}--incomplete`]: !isComplete,
			[`${markerClass}--current`]: isCurrent,
		},
	);

	const completedAriaLabel = 'completed';

	return (
		<li
			className={baseClasses}
			{...props}
			ref={ref}
		>

			<div className={markerContainerClass}>
				{isComplete ? (
					<Icon
						className={markerClasses}
						variant="check-circle"
						aria-label={completedAriaLabel}
					/>
				) : (
					<div
						className={markerClasses}
					/>
				)}
			</div>

			<div className={contentsClass}>
				{children}
			</div>
		</li>
	);
});
