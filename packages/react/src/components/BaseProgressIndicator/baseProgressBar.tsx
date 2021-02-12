import classNames from 'classnames';
import React, { useEffect } from 'react';
import { MDCLinearProgress } from '@material/linear-progress';

export type size = 'large' | 'small' | 'default' | undefined;

export interface BaseProgressBarProps extends React.HTMLAttributes<HTMLElement> {
	determinate?: boolean,
	baseName?:string,
	progress?: number | 0,
	label?: string,
	reversed?: boolean,
	buffer?: number;
	closed?:boolean,
	size?: size
}

export const BaseProgressBar = React.forwardRef<HTMLElement, BaseProgressBarProps>(({
	determinate = false,
	progress,
	buffer = 0,
	baseName,
	className,
	reversed = false,
	closed = false,
	size = 'default',
	label,
	...props
}: BaseProgressBarProps) => {
	const styleProgressbar = {
		large: { height: '1rem' },
		default: { height: '0.5rem' },
		small: { height: '0.25rem' },
	};

	const classes = classNames('mdc-linear-progress', className, {
		'mdc-linear-progress--closed': closed,
		'mdc-linear-progress--indeterminate': !determinate,
		'mdc-linear-progress--reversed': reversed,
	});

	useEffect(() => {
		const linearProgress = new MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
		if (linearProgress) {
			//
		}
	}, [progress]);

	const styles = styleProgressbar[size];
	const progressValue = progress ? (progress / 100) : 0;

	const progressChildElements = React.useMemo(() => {
		if (size) {
			return (
				<>
					<div className="mdc-linear-progress__buffer">
						<div className="mdc-linear-progress__buffer-bar" />
						<div
							className="mdc-linear-progress__buffer-dots"
							style={buffer ? { flexBasis: `${(1 - buffer) * 100}%` } : {}}
						/>
					</div>
					<div
						className="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
						style={progressValue ? { transform: `scaleX(${progressValue})` } : {}}
					>
						<span className={`mdc-linear-progress__bar-inner progressbar-${size}`} />
					</div>
					<div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
						<span className={`mdc-linear-progress__bar-inner progressbar-${size}`} />
					</div>

				</>
			);
		}
		return null;
	}, [buffer, progressValue, size]);
	return (
		<span className={baseName}>
			<div
				role="progressbar"
				className={classes}
				aria-label={label}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={progressValue}
				style={styles}
				{...props}
			>
				{
					progressChildElements
				}
			</div>
			{(label && !closed) ? <div className="nds-progressbar-label">{label}</div> : null}
		</span>
	);
});
