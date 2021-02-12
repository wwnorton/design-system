import React from 'react';
import { BaseProgressBarProps, BaseProgressBar } from '../BaseProgressIndicator';
import { prefix } from '../../config';

export type size = 'large' | 'small' | 'default' | undefined;
export interface ProgressbarProps extends BaseProgressBarProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The Label always bottom of the progressbar
	 */
	label?: string,
	/**
	 * The hight of the progressbar .
	 * Sizes are 'large' | 'small' | 'default'
	 * large size 1rem , small size is 0.25rem and default is 0.5rem
	 */
	size?: size,
	/**
	 * buffer indicate some activity of progress bar
	 */
	buffer?: number;
	/**
	 * By default progessbar indeterminate
	 * if select determinate true needs to set progress value
	 */
	determinate?:boolean;
	/**
	 * Progress value increase for determinate mode.
	 */
	progress?: number | 0;
}

export const Progressbar = React.forwardRef<HTMLElement, ProgressbarProps>(({
	baseName = prefix('progressbar'),
	...props
}: ProgressbarProps, ref) => (
	<BaseProgressBar
		baseName={baseName}
		ref={ref}
		{...props}
	/>
));
