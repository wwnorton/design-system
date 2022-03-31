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
	isCompleted,
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
			[`${markerClass}--complete`]: isCompleted,
			[`${markerClass}--incomplete`]: !isCompleted,
			[`${markerClass}--current`]: isCurrent,
		},
	);

	const completionStatusLabel = isCompleted ? 'completed' : 'incomplete';

	return (
		<li
			className={baseClasses}
			{...props}
			ref={ref}
			aria-current={isCurrent ? 'step' : undefined}
		>

			<div className={markerContainerClass}>
				{isCompleted ? (
					<Icon
						className={markerClasses}
						variant="check-circle"
						aria-label={completionStatusLabel}
					/>
				) : (
					<div
						className={markerClasses}
						aria-label={completionStatusLabel}
					/>
				)}
			</div>

			<div className={contentsClass}>
				{children}
			</div>
		</li>
	);
});
