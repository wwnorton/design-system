import React from 'react';

export const focusableSelectors = [
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

export const getFocusable = (
	from: HTMLElement | Document | ShadowRoot | null = document,
): NodeListOf<HTMLElement> | null => {
	if (from) return from.querySelectorAll(focusableSelectors.join(','));
	return null;
};

/**
 * Check whether an HTML element has a CSS transition.
 */
export const hasTransition = (el?: HTMLElement | null, pseudoEl?: string): boolean => {
	if (el) {
		const styles = window.getComputedStyle(el, pseudoEl);
		return styles.getPropertyValue('transition-duration')
			.split(/,\s*/)
			.some((value) => parseFloat(value) > 0);
	}
	return false;
};

export const srOnly: React.CSSProperties = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: '0',
};
