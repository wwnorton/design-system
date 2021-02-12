import React from 'react';
import { BaseSpinnerProps, BaseSpinner } from '../BaseProgressIndicator';
import { prefix } from '../../config';
import { AllColors } from '../../utilities/color';

export type placement = 'top' | 'bottom' | 'right' | 'left';
export type size = 'large' | 'medium' | 'small' | undefined;
export interface SpinnerProps extends BaseSpinnerProps {
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
	placement?: placement
	label?: string,
	/**
	 * The size of the circle.
	 * If using a number, the pixel unit is assumed.
	 * If using a string, you need to provide the CSS unit, e.g '3rem'.
	 */
	size?: size
}
export const defaultProps: SpinnerProps = {
	baseName: prefix('spinner'),
	determinate: false,
};

const withLabel = (baseElement: JSX.Element, props :SpinnerProps) => {
	const labelElement = <span>{props.label}</span>;
	const SpinnerElement = baseElement;
	let elementContainer = [labelElement, SpinnerElement];
	if (props.placement === 'top' || props.placement === 'left') {
		elementContainer = [SpinnerElement, labelElement];
	}
	return (
		<span className={`${prefix('spinner')} nds-spinner-placement-${props.placement ? props.placement : 'bottom'}`}>
			{
				elementContainer
			}
		</span>
	);
};

const renderElement = (refElement: JSX.Element, props: SpinnerProps) => {
	if (props.label) {
		return withLabel(refElement, props);
	}
	return refElement;
};

export const Spinner = React.forwardRef<HTMLElement, SpinnerProps>(({
	...props
}: SpinnerProps, ref) => {
	const baseElement = (
		<BaseSpinner
			ref={ref}
			size="medium"
			{...props}
		/>
	);
	return renderElement(baseElement, props);
});
