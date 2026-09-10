import React from 'react';
import classNames from 'classnames';
import { SliderMark, SliderProps } from '../types';

export type UseMarksInput = Pick<SliderProps, 'getValueText'> &
	Required<
		Pick<
			SliderProps,
			'marks' | 'orientation' | 'min' | 'max' | 'step' | 'value' | 'showValueIndicators'
		>
	> & {
		css: {
			marksContainer: string;
			mark: string;
			markActive: string;
			valueIndicator: string;
			valueIndicatorsContainer: string;
		};
	};
export type UseMarksOutput = {
	/**
	 * The rendered react nodes for the marks.
	 */
	renderedMarks: React.ReactNode;

	/**
	 * The rendered react nodes for the value indicators.
	 */
	renderedValueIndicators: React.ReactNode;

	/**
	 * The text value for the slider.
	 * It is used to set the aria-valuetext attribute on the slider input
	 * and to display the value next to the slider label.
	 */
	valueText: string;
};

/**
 * Hook to render the marks and value indicators for the slider.
 * It also provides the text value for the slider.
 */
export function useMarks({
	marks,
	getValueText,
	orientation,
	min,
	max,
	step,
	value,
	showValueIndicators,
	css,
}: UseMarksInput): UseMarksOutput {
	let marksArray: Array<SliderMark> | undefined;
	if (Array.isArray(marks)) {
		marksArray = marks;
	} else if (marks === true) {
		const numberOfMarks = (max - min) / step;
		marksArray = Array.from({ length: numberOfMarks + 1 }, (_, index) => ({
			value: index * step + min,
			label: index.toString(),
		}));
	}

	let valueText: string;
	if (getValueText) {
		valueText = getValueText(value);
	} else if (marksArray) {
		valueText =
			marksArray.find((mark) => mark.value === value)?.label?.toString() ?? value.toString();
	} else {
		valueText = value.toString();
	}

	let renderedMarks: React.ReactNode;
	let renderedValueIndicators: React.ReactNode;
	if (marksArray) {
		const marksChildren: React.ReactNode[] = [];
		const valueIndicatorsChildren: React.ReactNode[] = [];

		marksArray.forEach((mark) => {
			let markValue: number;
			if (orientation === 'vertical') {
				// When vertical, we're rendering the marks from top to bottom,
				// but the slider is moving from bottom to top,
				// so we need to calculate the mark value in the inverse direction of the value.
				markValue = max - mark.value;
			} else {
				markValue = mark.value;
			}

			const isActive = markValue <= value;

			marksChildren.push(
				<div
					key={mark.value}
					className={classNames(css.mark, {
						[css.markActive]: isActive,
					})}
					style={
						{
							'--mark-position': `${(mark.value / (max - min)) * 100}%`,
						} as React.CSSProperties
					}
					aria-hidden="true"
				/>,
			);

			if (showValueIndicators) {
				valueIndicatorsChildren.push(
					<span
						key={mark.value}
						className={css.valueIndicator}
						style={
							{
								'--mark-position': `${(mark.value / (max - min)) * 100}%`,
							} as React.CSSProperties
						}
					>
						{mark.label}
					</span>,
				);
			}
		});

		renderedMarks = <div className={css.marksContainer}>{marksChildren}</div>;
		if (showValueIndicators) {
			renderedValueIndicators = (
				<div className={css.valueIndicatorsContainer}>{valueIndicatorsChildren}</div>
			);
		}
	} else {
		renderedMarks = null;
		renderedValueIndicators = null;
	}

	return {
		renderedMarks,
		renderedValueIndicators,
		valueText,
	};
}
