/**
 * Whether the element should be treated as having visible focus (`:focus-visible`).
 *
 * Prefer the native selector when supported. The class/attribute branches exist for
 * environments that load the [WICG `focus-visible` polyfill](https://github.com/WICG/focus-visible)
 * (npm `focus-visible`), which marks keyboard focus with `.focus-visible` and
 * `data-focus-visible-added`.
 */
export function isFocusVisible(element: Element): boolean {
	try {
		if (element.matches(':focus-visible')) {
			return true;
		}
	} catch {
		// Selector unsupported — fall through to WICG polyfill markers below.
	}

	if (element instanceof HTMLElement) {
		if (element.classList.contains('focus-visible')) {
			return true;
		}
		if (element.hasAttribute('data-focus-visible-added')) {
			return true;
		}
	}

	return false;
}
