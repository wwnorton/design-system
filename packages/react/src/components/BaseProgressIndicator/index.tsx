import classNames from 'classnames';
import React from 'react';
import { CircularProgress } from './circular-progress';

export type size = 'large' | 'medium' | 'small' | undefined;
export interface BaseProgressIndicatorProps extends React.HTMLAttributes<HTMLElement> {
	determinate: boolean
	progress?: number | 0,
	label?: string,
	size?: size
}

const XMLNS = 'http://www.w3.org/2000/svg';

export const BaseProgressIndicator = React.forwardRef<HTMLElement, BaseProgressIndicatorProps>(({
	determinate = false,
	color,
	progress,
	label,
	size = 'medium',
}: BaseProgressIndicatorProps) => {
	const circularColor = color ? `var(--nds-${color}-60)` : color;
	const styleDimensions = {
		large: { width: '48px', height: '48px' },
		medium: { width: '32px', height: '32px' },
		small: { width: '24px', height: '24px' },
	};

	const classes = classNames('mdc-circular-progress', {
		'mdc-circular-progress--indeterminate': !determinate,
		[`mdc-circular-progress--${size}`]: size,
	});
	const styles = styleDimensions[size];

	return (
		<div
			className={classes}
			role="progressbar"
			aria-label={label}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progress}
			style={styles}
		>
			<CircularProgress
				color={circularColor}
				determinate={determinate}
				progress={progress}
				progressSize={size}
				XMLNS={XMLNS}
			/>
		</div>
	);
});
