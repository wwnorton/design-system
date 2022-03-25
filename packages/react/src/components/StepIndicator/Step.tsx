import React from 'react';
import classNames from 'classnames';
import { StepProps } from './types';
import { Icon } from '../Icon';

export const Step = React.forwardRef<HTMLLIElement, StepProps>(({
	baseName = 'nds-step',
	connectorClass = `${baseName}__connector`,
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
		className,
		baseName,
	);

	const markerClasses = classNames(
		markerClass,
		{
			[`${markerClass}--complete`]: isComplete,
			[`${markerClass}--current`]: isCurrent,
			[`${markerClass}--incomplete`]: !isComplete,
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
				<div className={connectorClass} />
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
				<div className={connectorClass} />
			</div>

			<div className={contentsClass}>
				{children}
			</div>
		</li>
	);
});
