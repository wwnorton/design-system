import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import { CoreProgressProps, BaseProgressSpinner, BaseProgressSpinnerProps } from '../BaseProgress';
import { SystemColors } from '../../utilities/color';
import { useId } from '../../utilities';

export interface SpinnerProps extends CoreProgressProps<BaseProgressSpinnerProps> {
	/** Where the label should be positioned relative to the spinner. */
	labelPosition?: 'right' | 'bottom';
	/**
	 * The spinner's color, restricted to
	 * [system colors](https://wwnorton.github.io/design-system/docs/foundations/color#system-tokens).
	 */
	color?: SystemColors;
	/**
	 * The width and height of the spinner. A number value will be interpreted
	 * as pixels. A string value should include its unit (e.g., `2rem`).
	 */
	size?: number | string;
}

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
	const id = useId();
	const labelPosition = (hideLabel) ? undefined : position;
	const labelId = React.useRef(`${baseName}-label-${id}` || uniqueId(`${baseName}-label-`));
	const classes = classNames(className, baseName, {
		[`${baseName}--${color}`]: color !== undefined,
	});

	return (
		<div className={classes} data-label={(hideLabel) ? undefined : labelPosition}>
			<BaseProgressSpinner
				ref={ref}
				aria-labelledby={(hideLabel) ? undefined : labelId.current}
				aria-label={(hideLabel) ? label : undefined}
				size={size}
				{...props}
			/>
			{ !hideLabel && (
				<div
					className={labelClass}
					id={labelId.current}
					aria-hidden="true"
				>
					{ label }
				</div>
			) }
		</div>
	);
});
