export interface BaseProgressProps extends React.ComponentPropsWithoutRef<'div'> {
	/** Indicates how much of the task has been completed. */
	progress?: number;
	/**
	 * Describes how much work is required to complete the progress. If defined,
	 * it must be greater than `0` and be a valid floating point number.
	 * The default is `1`.
	 */
	max?: number;
}

export interface BaseProgressBarProps extends BaseProgressProps {
	/** A buffered value between `0` and `1`. */
	buffer?: number;
	/** Indicates that the progress bar should grow right to left. */
	reversed?: boolean;
}

export interface BaseProgressSpinnerProps extends BaseProgressProps {
	/**
	 * The height and width of the spinner. Numbers will be treated as pixels.
	 * Strings must include their unit (e.g., `"2rem"`).
	 */
	size?: number | string;
	/** The width of the spinner circle. Default is `4`. */
	strokeWidth?: number;
}

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
