import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import { CoreProgressProps, BaseProgressBar, BaseProgressBarProps } from '../BaseProgress';
import { prefix } from '../../config';

export interface ProgressBarProps extends CoreProgressProps<BaseProgressBarProps> {
	/**
	 * The hight of the progress bar. This sets a className of `nds-progressbar--${size}`,
	 * which can be used to change the size. `@wwnds/core`'s default stylings
	 * will correspond to:
	 * - `small` - `4px`
	 * - `undefined` - `8px`
	 * - `large` - `16px`
	 */
	size?: 'small' | 'large';
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(({
	label,
	hideLabel,
	size,
	baseName = prefix('progressbar'),
	labelClass = `${baseName}__label`,
	className,
	...props
}: ProgressBarProps, ref) => {
	const { current: labelId } = React.useRef(uniqueId(`${baseName}-label-`));
	const classes = classNames(className, baseName, (size) && `${baseName}--${size}`);
	return (
		<div className={classes}>
			<BaseProgressBar
				ref={ref}
				aria-labelledby={(hideLabel) ? undefined : labelId}
				aria-label={(hideLabel) ? label : undefined}
				{...props}
			/>
			{ !hideLabel && <div className={labelClass} id={labelId} aria-hidden="true">{ label }</div> }
		</div>
	);
});
