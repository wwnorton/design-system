export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
	/** The value of the slider. */
	value?: number;

	/** The maximum value of the slider. */
	max?: number;

	/** The base `className` according to BEM conventions. */
	baseName?: string;

	/**
	 * The label for the slider.
	 */
	label: React.ReactNode;

	/**
	 * Indicates whether the slider should be displayed vertically.
	 * @default false
	 */
	isVertical?: boolean;

	/**
	 * The class name for the label.
	 */
	labelClass?: string;

	/**
	 * The class name for the input.
	 */
	inputClass?: string;

	/**
	 * The class name for the indicators.
	 */
	indicatorsClass?: string;

	/**
	 * Indicates whether the slider should display value indicators.
	 * If set to `true`, the slider will display an indicator for each step up to the maximum number of indicators.
	 * In this setting the indicators won't have labels.
	 *
	 * If set to an array of objects, the slider will display an indicator for each object in the array.
	 * In this setting the indicators will have labels.
	 */
	valueIndicators?:
		| boolean
		| Array<{
				value: number;
				/**
				 * If not set the label will be the value of the indicator.
				 * @example
				 * { value: 50, label: 'Midpoint' }
				 * { value: 50 } // will be displayed as '50'
				 */
				label?: string;
		  }>;

	/**
	 * The maximum number of indicators to display.
	 * @default DEFAULT_MAX_NUMBER_OF_INDICATORS
	 */
	maxNumberOfIndicators?: number;
}
