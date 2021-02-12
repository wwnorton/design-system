import classNames from 'classnames';
import React from 'react';

export interface BaseSpinnerProps extends React.HTMLAttributes<HTMLElement> {
	determinate: boolean
	progress?: number | 0,
	label?: string,
	size?: 'large' | 'medium' | 'small' | undefined;
}

export const BaseSpinner = React.forwardRef<HTMLElement, BaseSpinnerProps>(({
	determinate = false,
	color,
	progress,
	label,
	size = 'medium',
}: BaseSpinnerProps) => {
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

	const circleGraphicViewBoxes = React.useMemo(() => ({
		large: '0 0 48 48',
		medium: '0 0 32 32',
		small: '0 0 24 24',
	}), []);

	const circleProps = React.useMemo(() => ({
		large: {
			cx: '24',
			cy: '24',
			r: '18',
			strokeDasharray: '113.097',
			strokeDashoffset: '56.549',
			strokeWidth: '4',
			stroke: circularColor,
		},
		medium: {
			cx: '16',
			cy: '16',
			r: '12.5',
			strokeDasharray: '78.54',
			strokeDashoffset: '39.27',
			strokeWidth: '3',
			stroke: circularColor,
		},
		small: {
			cx: '12',
			cy: '12',
			r: '8.75',
			strokeDasharray: '54.978',
			strokeDashoffset: '27.489',
			strokeWidth: '2.5',
			stroke: circularColor,
		},
	}), [circularColor]);
	const valueProgress = determinate === true ? progress || 0 : 0;
	const strokeDashoffset = (1 - (valueProgress / 100))
		* (2 * Math.PI * Number(circleProps[size].r));

	const indeterminateElements = React.useMemo(() => {
		if (circleGraphicViewBoxes !== undefined) {
			const XMLNS = 'http://www.w3.org/2000/svg';
			return (
				<div className="mdc-circular-progress__indeterminate-container">
					<div className="mdc-circular-progress__determinate-container">
						<svg
							className="mdc-circular-progress__determinate-circle-graphic"
							viewBox={circleGraphicViewBoxes[size]}
							xmlns={XMLNS}
						>
							<circle
								className="mdc-circular-progress__determinate-circle"
								{...circleProps[size]}
								strokeDashoffset={circleProps[size].strokeDasharray}
							/>
						</svg>
					</div>
					<div className="mdc-circular-progress__spinner-layer">
						<div
							className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
						>
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[size]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[size]}
								/>
							</svg>
						</div>
						<div className="mdc-circular-progress__gap-patch">
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[size]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[size]}
								/>
							</svg>
						</div>
						<div
							className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
						>
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[size]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[size]}
								/>
							</svg>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}, [circleProps, size, circleGraphicViewBoxes]);

	const determinateElements = React.useMemo(() => {
		if (circleGraphicViewBoxes !== undefined) {
			const XMLNS = 'http://www.w3.org/2000/svg';
			return (
				<div className="mdc-circular-progress__determinate-container">
					<svg
						className="mdc-circular-progress__determinate-circle-graphic"
						viewBox={circleGraphicViewBoxes[size]}
						xmlns={XMLNS}
					>
						<circle
							className="mdc-circular-progress__determinate-circle"
							{...circleProps[size]}
							style={{ stroke: circularColor }}
							strokeDashoffset={strokeDashoffset}
						/>
					</svg>
				</div>
			);
		}
		return null;
	}, [circleProps, size, circleGraphicViewBoxes, circularColor, strokeDashoffset]);

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
			{determinate === false ? indeterminateElements : determinateElements}
		</div>
	);
});
