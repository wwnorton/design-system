import React from 'react';
import classNames from 'classnames';
import { BaseProgress } from './BaseProgress';
import { BaseProgressSpinnerProps } from './types';

// CONSTANTS

const CIRCLE_PROPS = {
	cy: 24,
	cx: 24,
	r: 18,
};

const STROKE_DASHARRAY = 113.097;

const SVG_PROPS = {
	'aria-hidden': true,
	viewBox: '0 0 48 48',
	xmlns: 'http://www.w3.org/2000/svg',
};

// COMPONENT

export const BaseProgressSpinner = React.forwardRef<HTMLDivElement, BaseProgressSpinnerProps>(({
	size = '2rem',
	strokeWidth = 4,
	progress,
	className,
	...props
}: BaseProgressSpinnerProps, ref) => {
	const determinate = progress !== undefined;

	const classes = classNames(className, 'mdc-circular-progress', {
		'mdc-circular-progress--indeterminate': !determinate,
	});

	return (
		<BaseProgress
			className={classes}
			progress={progress}
			max={1}
			style={{ width: size, height: size }}
			ref={ref}
			{...props}
		>
			{ determinate ? (
				<div className="mdc-circular-progress__determinate-container">
					<svg className="mdc-circular-progress__determinate-circle-graphic" {...SVG_PROPS}>
						<circle
							className="mdc-circular-progress__determinate-track"
							{...CIRCLE_PROPS}
							strokeWidth={strokeWidth}
						/>
						<circle
							className="mdc-circular-progress__determinate-circle"
							{...CIRCLE_PROPS}
							strokeDasharray={STROKE_DASHARRAY}
							strokeDashoffset={
								(progress)
									? (1 - progress) * (2 * Math.PI * Number(CIRCLE_PROPS.r))
									: STROKE_DASHARRAY
							}
							strokeWidth={strokeWidth}
						/>
					</svg>
				</div>
			) : (
				<div className="mdc-circular-progress__indeterminate-container">
					<div className="mdc-circular-progress__spinner-layer">
						<div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
							<svg className="mdc-circular-progress__indeterminate-circle-graphic" {...SVG_PROPS}>
								<circle
									{...CIRCLE_PROPS}
									strokeDasharray={STROKE_DASHARRAY}
									strokeDashoffset={STROKE_DASHARRAY / 2}
									strokeWidth={strokeWidth}
								/>
							</svg>
						</div>
						<div className="mdc-circular-progress__gap-patch">
							<svg className="mdc-circular-progress__indeterminate-circle-graphic" {...SVG_PROPS}>
								<circle
									{...CIRCLE_PROPS}
									strokeDasharray={STROKE_DASHARRAY}
									strokeDashoffset={STROKE_DASHARRAY / 2}
									strokeWidth={strokeWidth * 0.8}
								/>
							</svg>
						</div>
						<div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
							<svg className="mdc-circular-progress__indeterminate-circle-graphic" {...SVG_PROPS}>
								<circle
									{...CIRCLE_PROPS}
									strokeDasharray={STROKE_DASHARRAY}
									strokeDashoffset={STROKE_DASHARRAY / 2}
									strokeWidth={strokeWidth}
								/>
							</svg>
						</div>
					</div>
				</div>
			) }
		</BaseProgress>
	);
});
