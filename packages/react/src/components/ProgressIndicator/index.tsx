import React from 'react';
import { BaseProgressIndicatorProps, BaseProgressIndicator } from '../BaseProgressIndicator';
import { prefix } from '../../config';
import { useForwardedRef } from '../../hooks';
import { AllColors } from '../../utilities/color';

export type ProgressIndicatorVariant = 'determinate' | 'indeterminate' | 'static';
export type LabelPosition = 'top' | 'bottom' | 'right' | 'left';
export interface ProgressIndicatorProps extends BaseProgressIndicatorProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/**
	 * The button's color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),
	 * excluding `disabled` (prefer the `disabled` prop). Note that an `undefined`
	 * color will result in the "primary" color being used.
	 */
	color?: Exclude<AllColors, 'disabled'>;
	/** The variant to use. Use indeterminate when there is no progress value. */
	variant?: ProgressIndicatorVariant;
	thickness?: number;
	ariaBusy?: boolean
	progressValue?: number;
	labelPosition?: LabelPosition | 'bottom'
	label?: string
}

const withLabel = (baseElement: JSX.Element, elementProps :ProgressIndicatorProps, baseName:string) => {
	const labelElement = <span>{elementProps.label}</span>;
	const progressIndicatorElement = baseElement;
	let elementContainer = [labelElement, progressIndicatorElement];
	if (elementProps.labelPosition === 'top' || elementProps.labelPosition === 'left') {
		elementContainer = [progressIndicatorElement, labelElement];
	}
	return (
		<div className={`${baseName} nds-${elementProps.labelPosition ? elementProps.labelPosition : 'bottom'}`}>
			{
				elementContainer
			}
		</div>
	);
};

export const ProgressIndicator = React.forwardRef((
	{
		baseName = prefix('progressindicator'),
		...props
	}: ProgressIndicatorProps, ref,
) => {
	const [progressIndicator, setProgressIndicator] = useForwardedRef(ref);
	const baseElement = (
		<BaseProgressIndicator
			ref={setProgressIndicator}
			{...props}
		/>
	);
	if (progressIndicator && props.label) {
		return withLabel(baseElement, props, baseName);
	}
	return baseElement;
});
