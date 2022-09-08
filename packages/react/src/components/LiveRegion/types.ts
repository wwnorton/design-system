type BaseProps = 'children' | 'id' | 'className' | 'role' | 'aria-atomic' | 'aria-live' | 'aria-relevant';

export interface LiveRegionProps extends Pick<React.ComponentPropsWithoutRef<'div'>, BaseProps> {
	/**
	 * The time in milliseconds that the live region should exist. Default is
	 * `450`. `undefined` or `0` will make the live region persist indefinitely.
	 */
	removeAfter?: number;
	/**
	 * The time in milliseconds that should elapse before the contents of the
	 * live region's contents should be updated. This should be long enough for
	 * screen readers to begin monitoring the live region for changes. Default
	 * is `50`.
	 */
	updateAfter?: number;
	/**
	 * Indicates whether the live region should be visible or not. If `true`,
	 * inline CSS will be used to visually hide the live region.
	 */
	visible?: boolean;
}
