import { CoreProgressProps, BaseProgressBarProps } from '../BaseProgress';

export interface ProgressBarProps extends CoreProgressProps<BaseProgressBarProps> {
	/**
	 * The hight of the progress bar. This sets a className of `nds-progressbar--${size}`,
	 * which can be used to change the size. `@wwnds/core`'s default stylings
	 * will correspond to:
	 * - `small` - `4px`
	 * - `undefined` - `8px`
	 * - `large` - `16px`
	 */
	size?: 'small' | 'large';
}
