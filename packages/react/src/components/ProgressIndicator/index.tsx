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
export const defaultProps: ProgressIndicatorProps = {
	baseName: prefix('progressindicator'),
};

const withLabel = (baseElement: JSX.Element, props :ProgressIndicatorProps) => {
	const labelElement = <span>{props.label}</span>;
	const progressIndicatorElement = baseElement;
	let elementContainer = [labelElement, progressIndicatorElement];
	if (props.labelPosition === 'top' || props.labelPosition === 'left') {
		elementContainer = [progressIndicatorElement, labelElement];
	}
	return (
		<div className={`${prefix('progressindicator')} nds-${props.labelPosition ? props.labelPosition : 'bottom'}`}>
			{
				elementContainer
			}
		</div>
	);
};

const renderElement = (baseElement: JSX.Element, props: ProgressIndicatorProps) => {
	if (props.label) {
		return withLabel(baseElement, props);
	}
	return baseElement;
};

export const ProgressIndicator = React.forwardRef<HTMLElement, ProgressIndicatorProps>(({
	...props
}: ProgressIndicatorProps, ref) => {
	const [progressIndicator, setProgressIndicator] = useForwardedRef(ref);
	const baseElement = (
		<BaseProgressIndicator
			ref={setProgressIndicator}
			{...props}
		/>
	);
	return renderElement(baseElement, props);
});

// export const ProgressIndicator = React.forwardRef((
// 	{
// 		baseName = prefix('progressindicator'),
// 		...props
// 	}: ProgressIndicatorProps, ref,
// ) => {
// 	const [progressIndicator, setProgressIndicator] = useForwardedRef(ref);
// 	const baseElement = (
// 		<BaseProgressIndicator
// 			ref={setProgressIndicator}
// 			{...props}
// 		/>
// 	);
// 	if (progressIndicator && props.label !== null) {
// 		return withLabel(baseElement, props, baseName);
// 	}
// 	return baseElement;
// });
