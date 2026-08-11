export interface SliderClassesProps {
	/**
	 * The class for the slider component.
	 */
	className?: string;

	/**
	 * The base name to append to the class names of all elements within the slider.
	 * @default 'nds-slider'
	 */
	baseName?: string;

	/**
	 * The class for the body of the slider.
	 * The body is the container that holds the slider and the mark values.
	 * @default 'nds-slider__body'
	 */
	bodyClass?: string;

	/**
	 * The class for the body container.
	 * The body container is the container that holds the body and the icons.
	 * @default 'nds-slider__body-container'
	 */
	bodyContainerClass?: string;

	/**
	 * The class for the actual slider element.
	 * The slider is holds the track and the handle.
	 * @default 'nds-slider__slider'
	 */
	sliderClass?: string;

	/**
	 * The class for the container that holds the handle.
	 * @default 'nds-slider__handle-container'
	 */
	handleContainerClass?: string;

	/**
	 * The class for the handle.
	 * @default 'nds-slider__handle'
	 */
	handleClass?: string;

	/**
	 * The class for the range input.
	 * @default 'nds-slider__range-input'
	 */
	rangeInputClass?: string;

	/**
	 * The class for the active track.
	 * @default 'nds-slider__active-track'
	 */
	activeTrackClass?: string;

	/**
	 * The class for the track.
	 * @default 'nds-slider__track'
	 */
	trackClass?: string;

	/**
	 * The class for the marks container.
	 * @default 'nds-slider__marks-container'
	 */
	marksContainerClass?: string;

	/**
	 * The class for the mark.
	 * @default 'nds-slider__mark'
	 */
	markClass?: string;

	/**
	 * The class for the mark value.
	 * @default 'nds-slider__mark-value'
	 */
	valueIndicatorClass?: string;

	/**
	 * The class for the mark values container.
	 * It contains the mark values.
	 * The mark values are the labels that appear next to the marks.
	 * @default 'nds-slider__mark-values-container'
	 */
	valueIndicatorsContainerClass?: string;

	/**
	 * The class for the label.
	 * @default 'nds-slider__label'
	 */
	labelClass?: string;

	/**
	 * The class for the value.
	 * @default 'nds-slider__value'
	 */
	valueClass?: string;

	/**
	 * The class for the header.
	 * The header is the container that holds the label and the value.
	 * @default 'nds-slider__header'
	 */
	headerClass?: string;

	/**
	 * The class for the footer.
	 * The footer is the container that holds the supporting text.
	 * @default 'nds-slider__footer'
	 */
	footerClass?: string;
}
