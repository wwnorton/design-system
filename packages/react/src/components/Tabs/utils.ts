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
export const getFocusable = (
	from: Element | Document | ShadowRoot,
): NodeListOf<HTMLElement> => from.querySelectorAll(focusableSelectors.join(','));

export function moveFocusToTabPanel(id: string) {
	// TODO: how can we ensure this will work inside an iFrame?
	// Is this a problem?
	const tabPanel = document.getElementById(id);
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
