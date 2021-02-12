import React from 'react';
import { BaseProgressBarProps, BaseProgressBar } from '../BaseProgressIndicator';
import { prefix } from '../../config';
import { AllColors } from '../../utilities/color';

export type LabelPlacement = 'top' | 'bottom' | 'right' | 'left';
export type size = 'large' | 'small' | 'default' | undefined;
export interface ProgressbarProps extends BaseProgressBarProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The spinner's color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),
	 * excluding `disabled` (prefer the `disabled` prop). Note that an `undefined`
	 * color will result in the "primary" color being used.
	 */
	color?: Exclude<AllColors, 'disabled'>;
	/**
	 * The Label placement is alignment with the spinner
	 * Alignments are top | bottom | right | left
	 */
	labelPlacement?: LabelPlacement
	label?: string,
	/**
	 * The size of the circle.
	 * If using a number, the pixel unit is assumed.
	 * If using a string, you need to provide the CSS unit, e.g '3rem'.
	 */
	size?: size,
	buffer?: number;
}
export const defaultProps: ProgressbarProps = {
	baseName: prefix('progressbar'),
	determinate: false,
};

export const Progressbar = React.forwardRef<HTMLElement, ProgressbarProps>(({
	buffer,
	...props
}: ProgressbarProps, ref) => (
	<BaseProgressBar
		ref={ref}
		buffer={buffer}
		{...props}
	/>
));
