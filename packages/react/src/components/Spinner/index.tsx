import React from 'react';
import { BaseProgressIndicatorProps, BaseProgressIndicator } from '../BaseProgressIndicator';
import { prefix } from '../../config';
import { AllColors } from '../../utilities/color';

export type LabelPlacement = 'top' | 'bottom' | 'right' | 'left';
export type size = 'large' | 'medium' | 'small' | undefined;
export interface BaseIndicatorProps extends BaseProgressIndicatorProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The button's color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),
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
	size?: size
}
export const defaultProps: BaseIndicatorProps = {
	baseName: prefix('spinner'),
	determinate: false,
};

const withLabel = (baseElement: JSX.Element, props :BaseIndicatorProps) => {
	const labelElement = <span>{props.label}</span>;
	const SpinnerElement = baseElement;
	let elementContainer = [labelElement, SpinnerElement];
	if (props.labelPlacement === 'top' || props.labelPlacement === 'left') {
		elementContainer = [SpinnerElement, labelElement];
	}
	return (
		<span className={`${prefix('spinner')} nds-spinner-placement-${props.labelPlacement ? props.labelPlacement : 'bottom'}`}>
			{
				elementContainer
			}
		</span>
	);
};

const renderElement = (refElement: JSX.Element, props: BaseIndicatorProps) => {
	if (props.label) {
		return withLabel(refElement, props);
	}
	return refElement;
};

export const Spinner = React.forwardRef<HTMLElement, BaseIndicatorProps>(({
	...props
}: BaseIndicatorProps, ref) => {
	const baseElement = (
		<BaseProgressIndicator
			ref={ref}
			size="medium"
			progress={80}
			{...props}
		/>
	);
	return renderElement(baseElement, props);
});
