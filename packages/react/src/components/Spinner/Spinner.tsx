import React from 'react';
import classNames from 'classnames';
import { BaseProgressSpinner } from '../BaseProgress';
import { useId } from '../../utilities';
import { SpinnerProps } from './types';

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({
	label = 'Loading...',
	color,
	baseName = 'nds-spinner',
	labelClass = `${baseName}__label`,
	labelPosition: position = 'right',
	hideLabel,
	size = '3rem',
	className,
	...props
}: SpinnerProps, ref) => {
	const labelId = useId();
	const labelPosition = (hideLabel) ? undefined : position;
	const classes = classNames(className, baseName, {
		[`${baseName}--${color}`]: color !== undefined,
	});

	return (
		<div className={classes} data-label={(hideLabel) ? undefined : labelPosition}>
			<BaseProgressSpinner
				ref={ref}
				aria-labelledby={(hideLabel) ? undefined : labelId}
				aria-label={(hideLabel) ? label : undefined}
				size={size}
				{...props}
			/>
			{ !hideLabel && (
				<div
					className={labelClass}
					id={labelId}
					aria-hidden="true"
				>
					{ label }
				</div>
			) }
		</div>
	);
});
