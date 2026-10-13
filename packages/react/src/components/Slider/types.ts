import { AllColors } from '../../utilities/color';
import { IconVariant, SVGIcon } from '../Icon';
import { SliderClassesProps } from './privateTypes';

export interface SliderMark {
	value: number;
	label?: React.ReactNode;
}

interface SliderBaseProps
	extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'min' | 'max' | 'step' | 'onChange' | 'value'
		>,
		SliderClassesProps {
	/**
	 * The orientation of the slider.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical' | 'horizontal-centered';

	/**
	 * Whether to show the tick marks.
	 * If an array is provided, the marks will be displayed at the values specified in the array.
	 * The labels will be used as the text to show in the value indicator as well as the aria-valuetext attribute on the slider input.
	 * If set `getValueText` takes precedence.
	 *
	 * @default false
	 */
	marks?: boolean | Array<SliderMark>;

	/**
	 * The minimum value of the slider.
	 * @default 0
	 */
	min?: number;

	/**
	 * The maximum value of the slider.
	 * @default 100
	 */
	max?: number;

	/**
	 * The step value of the slider.
	 * @default 10
	 */
	step?: number;

	/**
	 * The icon to display on the left of the slider.
	 */
	iconLeft?: IconVariant | SVGIcon;

	/**
	 * The icon to display on the right of the slider.
	 */
	iconRight?: IconVariant | SVGIcon;

	/**
	 * A function to format the value text for the slider.
	 * It's also used to set the aria-valuetext attribute on the slider input.
	 * If set, takes precedence over the `marks` prop when setting the aria-valuetext attribute.
	 */
	getValueText?: (value: number) => string;

	/**
	 * The text to display below the slider.
	 */
	supportingText?: React.ReactNode;

	/**
	 * The color of the slider.
	 * @default 'primary'
	 */
	color?: Exclude<AllColors, 'disabled' | 'base'>;

	/**
	 * Whether to show the value indicators.
	 * Value indicators are shown only if `marks` are set as well.
	 * @default false
	 */
	showValueIndicators?: boolean;

	/**
	 * The value of the slider.
	 * If set, the slider will be controlled.
	 * @default undefined
	 */
	value?: number;

	/**
	 * The function to call when the value of the slider changes.
	 * @default undefined
	 */
	onChange?: (value: number) => void;
}

type SliderLabelProps =
	| {
			/**
			 * The label to display next to the slider.
			 */
			label: React.ReactNode;
			/**
			 * The id of the HTML element that contains the label for the slider.
			 * If this is set, the label won't be rendered inside the slider component.
			 */
			externalLabelId?: string;
	  }
	| {
			/**
			 * The label to display next to the slider.
			 */
			label?: React.ReactNode;
			/**
			 * The id of the HTML element that contains the label for the slider.
			 * If this is set, the label won't be rendered inside the slider component.
			 */
			externalLabelId: string;
	  };

export type SliderProps = SliderBaseProps & SliderLabelProps;
