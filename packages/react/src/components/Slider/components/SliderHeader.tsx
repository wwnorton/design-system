import React from 'react';
import { SliderProps } from '../types';

export type SliderHeaderProps = Pick<SliderProps, 'orientation' | 'label' | 'externalLabelId'> & {
	valueText: string;
	className: string;
	valueClass: string;
	labelClass: string;
	inputId: string;
};

/**
 * Component to render the header of the slider.
 * It includes the label and the value.
 */
export const SliderHeader = ({
	label,
	externalLabelId,
	valueText,
	orientation,
	className,
	valueClass,
	labelClass,
	inputId,
}: SliderHeaderProps) => {
	let labelElement: React.ReactNode = null;
	if (!externalLabelId) {
		labelElement = (
			<label htmlFor={inputId} className={labelClass}>
				{label}
			</label>
		);
	}

	let renderedValueText: React.ReactNode = valueText;
	if (labelElement && orientation !== 'horizontal-centered') {
		renderedValueText = `: ${valueText}`;
	}
	const valueElement = (
		<span className={valueClass} aria-hidden>
			{renderedValueText}
		</span>
	);

	return (
		<div className={className}>
			{labelElement}
			{valueElement}
		</div>
	);
};
