export interface UseTokenProps {
	/** The token's name. Note that this shouldn't begin with `--`. */
	name: string;
	/**
	 * The token's value. If undefined, the initial value will be retrieved by
	 * looking up the token as a CSS custom property.
	 */
	value?: string | number | null;
	/** The element where the CSS custom property should be stored/retrieved. */
	el?: HTMLElement | null;
}
