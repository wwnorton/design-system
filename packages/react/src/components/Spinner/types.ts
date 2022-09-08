import { CoreProgressProps, BaseProgressSpinnerProps } from '../BaseProgress';
import { SystemColors } from '../../utilities/color';

export interface SpinnerProps extends CoreProgressProps<BaseProgressSpinnerProps> {
	/** Where the label should be positioned relative to the spinner. */
	labelPosition?: 'right' | 'bottom';
	/**
	 * The spinner's color, restricted to
	 * [system colors](https://wwnorton.github.io/design-system/docs/foundations/color#system-tokens).
	 */
	color?: SystemColors;
	/**
	 * The width and height of the spinner. A number value will be interpreted
	 * as pixels. A string value should include its unit (e.g., `2rem`).
	 */
	size?: number | string;
}
