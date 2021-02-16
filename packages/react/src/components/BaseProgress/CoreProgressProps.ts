import { BaseProgressProps } from './BaseProgress';

/** Props shared by ProgressBar & ProgressSpinner. */
export type CoreProgressProps<P extends BaseProgressProps = BaseProgressProps> = P & {
	/**
	 * The progress bar's label describes what is progressing. It is required
	 * and recommended to be visible.
	 */
	label: string;
	/**
	 * Indicates that the label should not be visible. Note that the label will
	 * still be accessible to assistive technologies even when it is not visible.
	 */
	hideLabel?: boolean;
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** The className for the progress indicator's label. Default is `${baseName}__label`. */
	labelClass?: string;
};
