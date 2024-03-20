import React from 'react';
import classNames from 'classnames';
import { BaseProgressBar } from '../BaseProgress';
import { useId } from '../../utilities';
import { ProgressBarProps } from './types';

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
	(
		{
			label,
			hideLabel,
			size,
			baseName = 'nds-progressbar',
			labelClass = `${baseName}__label`,
			className,
			...props
		}: ProgressBarProps,
		ref,
	) => {
		const labelId = useId();
		const classes = classNames(className, baseName, size && `${baseName}--${size}`);
		return (
			<div className={classes}>
				<BaseProgressBar
					ref={ref}
					aria-labelledby={hideLabel ? undefined : labelId}
					aria-label={hideLabel ? label : undefined}
					{...props}
				/>
				{!hideLabel && (
					<div className={labelClass} id={labelId} aria-hidden="true">
						{label}
					</div>
				)}
			</div>
		);
	},
);
