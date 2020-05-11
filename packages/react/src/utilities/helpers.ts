import {
	isValidElement, ReactElement, ReactText,
} from 'react';
import uniqueId from 'lodash.uniqueid';

/** Generic no-operation function. */
export const noop = (): void => {};	// eslint-disable-line @typescript-eslint/no-empty-function

/** Find out if an object is an element and if it's a specific HTML element. */
export function isElement<Props>(
	el?: ReactText | Parameters<typeof isValidElement>[0],
	htmlType?: string,
): el is ReactElement<Props> {
	if (isValidElement<Props>(el)) {
		// it's an HTML element
		if (typeof el.type === 'string') {
			return (htmlType) ? el.type.toLowerCase() === htmlType.toLowerCase() : true;
		}
		return 'props' in el;
	}
	return false;
}

interface PropId { id?: string }

/** Create a prefixed id generator that can be used to generate suffixed ids. */
export const idGen = ({ id }: PropId, prefix?: string): ((suffix?: string) => string) => {
	const uid = uniqueId(prefix);
	const ID = (): string => id || uid;

	return (suffix?: string): string => ID() + suffix;
};

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
	from: HTMLElement | Document | ShadowRoot = document,
): NodeListOf<HTMLElement> => from.querySelectorAll(focusableSelectors.join(','));

export const mergeRefs = <T>(
	innerRef: React.RefObject<T>,
	propRef?: React.Ref<T>,
): React.RefObject<T> => {
	if (!propRef) return innerRef;

	if (typeof propRef === 'function') {
		propRef(innerRef.current);
	} else {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		// eslint-disable-next-line no-param-reassign
		propRef.current = innerRef.current;
	}

	return innerRef;
};

/**
 * Check whether an HTML element has a CSS transition.
 */
export const hasTransition = (el?: HTMLElement | null): boolean => {
	if (el) {
		const styles = window.getComputedStyle(el);
		return styles.getPropertyValue('transition-duration')
			.split(/,\s*/)
			.some((value) => Number(value.replace('s', '')) > 0);
	}
	return false;
};
