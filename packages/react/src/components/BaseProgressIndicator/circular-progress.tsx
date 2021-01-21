import React from 'react';

export type size = 'large' | 'medium' | 'small';

export interface circularProps {
	color?: string,
	determinate: boolean,
	progressSize: size,
	progress?: number,
	XMLNS: string
}

export const CircularProgress = React.forwardRef<HTMLInputElement, circularProps>((
	{
		color,
		determinate,
		progress,
		progressSize,
		XMLNS,
	}: circularProps,
): React.ReactElement => {
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
			stroke: color,
		},
		medium: {
			cx: '16',
			cy: '16',
			r: '12.5',
			strokeDasharray: '78.54',
			strokeDashoffset: '39.27',
			strokeWidth: '3',
			stroke: color,
		},
		small: {
			cx: '12',
			cy: '12',
			r: '8.75',
			strokeDasharray: '54.978',
			strokeDashoffset: '27.489',
			strokeWidth: '2.5',
			stroke: color,
		},
	}), [color]);
	const valueProgress = determinate === true ? progress || 0 : 0;
	const strokeDashoffset = (1 - (valueProgress / 100))
		* (2 * Math.PI * Number(circleProps[progressSize].r));

	const IndeterminateElement = React.useMemo(() => {
		if (circleGraphicViewBoxes !== undefined) {
			return (
				<div className="mdc-circular-progress__indeterminate-container">
					<div className="mdc-circular-progress__determinate-container">
						<svg
							className="mdc-circular-progress__determinate-circle-graphic"
							viewBox={circleGraphicViewBoxes[progressSize]}
							xmlns={XMLNS}
						>
							<circle
								className="mdc-circular-progress__determinate-circle"
								{...circleProps[progressSize]}
								strokeDashoffset={circleProps[progressSize].strokeDasharray}
							/>
						</svg>
					</div>
					<div className="mdc-circular-progress__spinner-layer">
						<div
							className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
						>
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[progressSize]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[progressSize]}
								/>
							</svg>
						</div>
						<div className="mdc-circular-progress__gap-patch">
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[progressSize]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[progressSize]}
								/>
							</svg>
						</div>
						<div
							className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
						>
							<svg
								className="mdc-circular-progress__indeterminate-circle-graphic"
								viewBox={circleGraphicViewBoxes[progressSize]}
								xmlns={XMLNS}
							>
								<circle
									{...circleProps[progressSize]}
								/>
							</svg>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}, [circleProps, progressSize, circleGraphicViewBoxes, XMLNS]);

	const DeterminateElement = React.useMemo(() => {
		if (circleGraphicViewBoxes !== undefined) {
			return (
				<div className="mdc-circular-progress__determinate-container">
					<svg
						className="mdc-circular-progress__determinate-circle-graphic"
						viewBox={circleGraphicViewBoxes[progressSize]}
						xmlns={XMLNS}
					>
						<circle
							className="mdc-circular-progress__determinate-circle"
							{...circleProps[progressSize]}
							style={{ stroke: color }}
							strokeDashoffset={strokeDashoffset}
						/>
					</svg>
				</div>
			);
		}
		return null;
	}, [circleProps, progressSize, circleGraphicViewBoxes, XMLNS, color, strokeDashoffset]);

	return (
		<>
			{
				determinate === false ? IndeterminateElement : DeterminateElement
			}
		</>
	);
});
