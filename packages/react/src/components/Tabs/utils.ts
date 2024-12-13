const focusableSelectors = [
	'[contentEditable=true]:not([tabindex="-1"])',
	'[tabindex]:not([tabindex="-1"])',
	'a[href]:not([tabindex="-1"])',
	'button:not([disabled]):not([tabindex="-1"])',
	'dialog',
	'embed:not([tabindex="-1"])',
	'iframe:not([tabindex="-1"])',
	'input:not([disabled]):not([tabindex="-1"])',
	'map[name] area[href]:not([tabindex="-1"])',
	'object:not([tabindex="-1"])',
	'select:not([disabled]):not([tabindex="-1"])',
	'summary:not([tabindex="-1"])',
	'textarea:not([disabled]):not([tabindex="-1"])',
];

/** Get a list of focusable elements inside an element. */
export const getFocusable = (from: Element | Document | ShadowRoot): NodeListOf<HTMLElement> =>
	from.querySelectorAll(focusableSelectors.join(','));

/**
 * Updates the tab index of the panel currently active.
 *
 * This is used to enable focus on the panel element as specified
 * [here](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction),
 * specifically paragraph:
 *
 * > When the tab list contains the focus, moves focus to the next element
 * > in the page tab sequence outside the tablist, which is the tabpanel
 * > unless the first element containing meaningful content inside the tabpanel is focusable.
 *
 * This function checks if the panel contains focus-able elements, if so assigns `-1` to its
 * tab index. Otherwise assigns it to `0`
 */
export function updateTabPanelTabIndex(currentlyActivePanelId: string) {
	const tabPanel = document.getElementById(currentlyActivePanelId);
	if (!tabPanel) {
		return;
	}

	const firstFocusable = getFocusable(tabPanel)[0];
	if (firstFocusable) {
		tabPanel.setAttribute('tabindex', '-1');
	} else {
		tabPanel.setAttribute('tabindex', '0');
	}
}
