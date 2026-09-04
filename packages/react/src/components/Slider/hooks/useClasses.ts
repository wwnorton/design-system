import classNames from 'classnames';
import { SliderClassesProps } from '../privateTypes';
import { SliderProps } from '../types';

export type UseClassesOptions = {
	orientation?: SliderProps['orientation'];
	color?: SliderProps['color'];
	hasIconLeft?: boolean;
	hasIconRight?: boolean;
	disabled?: boolean;
};

export function useClasses(
	{
		baseName = 'nds-slider',
		bodyClass = `${baseName}__body`,
		sliderClass = `${baseName}__slider`,
		handleContainerClass = `${baseName}__handle-container`,
		handleClass = `${baseName}__handle`,
		rangeInputClass = `${baseName}__range-input`,
		activeTrackClass = `${baseName}__active-track`,
		trackClass = `${baseName}__track`,
		marksContainerClass = `${baseName}__marks-container`,
		markClass = `${baseName}__mark`,
		valueIndicatorClass = `${baseName}__value-indicator`,
		valueIndicatorsContainerClass = `${baseName}__value-indicators-container`,
		labelClass = `${baseName}__label`,
		valueClass = `${baseName}__value`,
		headerClass = `${baseName}__header`,
		bodyContainerClass = `${baseName}__body-container`,
		footerClass = `${baseName}__footer`,
	}: SliderClassesProps,
	options: UseClassesOptions,
) {
	return {
		base: classNames(baseName, {
			[`${baseName}--${options.orientation}`]: options.orientation,
			[`${baseName}--${options.color}`]: options.color,
			[`${baseName}--disabled`]: options.disabled,
		}),
		body: bodyClass,
		bodyContainer: bodyContainerClass,
		slider: sliderClass,
		handleContainer: handleContainerClass,
		handle: handleClass,
		handleActive: `${handleClass}--active`,
		rangeInput: classNames(rangeInputClass, {
			[`${baseName}--${options.orientation}`]: options.orientation,
		}),
		activeTrack: activeTrackClass,
		track: trackClass,
		marksContainer: marksContainerClass,
		mark: markClass,
		markActive: `${markClass}--active`,
		valueIndicator: valueIndicatorClass,
		valueIndicatorsContainer: valueIndicatorsContainerClass,
		label: labelClass,
		value: valueClass,
		header: headerClass,
		iconLeft: classNames(`${baseName}__icon`, `${baseName}__icon--left`),
		iconRight: classNames(`${baseName}__icon`, `${baseName}__icon--right`),
		footer: footerClass,
	};
}
