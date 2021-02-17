import React from 'react';

export interface BaseProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Indicates how much of the task has been completed. */
	progress?: number;
	/**
	 * Describes how much work is required to complete the progress. If defined,
	 * it must be greater than `0` and be a valid floating point number.
	 * The default is `1`.
	 */
	max?: number;
}

/**
 * A minimal progress indicator.
 *
 * References:
 * - [MDN - `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 * - [ARIA 1.2 - progressbar (role)](https://www.w3.org/TR/wai-aria-1.2/#progressbar)
 * - [ARIA Authoring Practices - Range properties with progress bars](https://w3c.github.io/aria-practices/#range_related_properties_progressbar_role)
 */
export const BaseProgress = React.forwardRef<HTMLDivElement, BaseProgressProps>((
	{
		progress,
		max = 1,
		children,
		...props
	}: BaseProgressProps, ref,
) => (
	<div
		role="progressbar"
		aria-valuenow={progress}
		aria-valuemax={max}
		// min is always 0 for <progress> so we're mirroring that here
		aria-valuemin={0}
		ref={ref}
		{...props}
	>
		{ children }
	</div>
));
