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
	 * The class name for the markers.
	 */
	markersClass?: string;

	/**
	 * Indicates whether the slider should display markers.
	 * @default false
	 */
	showMarkers?: boolean;
}
