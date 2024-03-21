import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { MDCLinearProgress } from '@material/linear-progress';
import { BaseProgress } from './BaseProgress';
import { BaseProgressBarProps } from './types';
import { useForwardedRef, useLayoutEffect } from '../../utilities';

export const BaseProgressBar = React.forwardRef<HTMLDivElement, BaseProgressBarProps>(
	({ progress, buffer, reversed, className, ...props }: BaseProgressBarProps, ref) => {
		const [progressRef, setProgressRef] = useForwardedRef(ref);
		const [linearProgress, setLinearProgress] = useState<MDCLinearProgress>();

		const classes = classNames(className, 'mdc-linear-progress', {
			'mdc-linear-progress--indeterminate': progress === undefined,
			'mdc-linear-progress--reversed': reversed,
		});

		useLayoutEffect(() => {
			if (progressRef) {
				setLinearProgress(new MDCLinearProgress(progressRef));
			}
		}, [progressRef]);

		useEffect(() => {
			if (buffer !== undefined && linearProgress) {
				linearProgress.buffer = buffer;
			}
		}, [buffer, linearProgress]);

		useEffect(() => {
			if (linearProgress) {
				if (progress !== undefined) {
					linearProgress.progress = progress;
				}
				linearProgress.determinate = progress !== undefined;
			}
		}, [progress, linearProgress]);

		return (
			<BaseProgress
				className={classes}
				progress={progress}
				dir={reversed ? 'rtl' : undefined}
				max={1}
				ref={setProgressRef}
				{...props}
			>
				<div className="mdc-linear-progress__buffer">
					<div className="mdc-linear-progress__buffer-bar" />
					<div className="mdc-linear-progress__buffer-dots" />
				</div>
				<div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
					<span className="mdc-linear-progress__bar-inner" />
				</div>
				<div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
					<span className="mdc-linear-progress__bar-inner" />
				</div>
			</BaseProgress>
		);
	},
);
