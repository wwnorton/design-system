import React from 'react';
import uniqueId from 'lodash.uniqueid';
import { config } from '../config';

/** Generic no-operation function. */
export const noop = (): void => {};	// eslint-disable-line @typescript-eslint/no-empty-function

/** Test if an element is hidden. By default, this includes `aria-hidden`. */
export const isHidden = (el: React.ReactElement, ariaHidden = true): boolean => {
	if (ariaHidden && (
		el.props['aria-hidden'] === true || el.props['aria-hidden'] === 'true'
	)) return true;
	const { display, visibility } = el.props.style;
	if (visibility && visibility !== 'visible') return true;
	if (display === 'none') return true;
	if (el.props.hidden) return true;
	return false;
};

/**
 * Recursively get the visible text content of an element and its descendants,
 * similar to Node.innerText.
 */
export const innerText = (children: React.ReactNode): string => {
	const strings = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			if (isHidden(child)) return '';
			return innerText(child.props.children);
		}
		return String(child);
	});
	if (strings) return strings.filter(Boolean).join('');
	return '';
};

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
export const hasTransition = (el?: HTMLElement | null, pseudoEl?: string): boolean => {
	if (el) {
		const styles = window.getComputedStyle(el, pseudoEl);
		return styles.getPropertyValue('transition-duration')
			.split(/,\s*/)
			.some((value) => Number(value.replace('s', '')) > 0);
	}
	return false;
};

export const prefix = (
	val: string,
	namespace = config.namespace,
	delimiter = '-',
): string => {
	if (!namespace) return val;
	return namespace + delimiter + val;
};

export const setProp = (
	prop: string,
	value: string | number,
	el: HTMLElement = document.documentElement,
): void => {
	el.style.setProperty(`--${prefix(prop)}`, String(value));
};

export const getProp = (
	prop: string,
	el: HTMLElement = document.documentElement,
): string => window.getComputedStyle(el).getPropertyValue(`--${prefix(prop)}`).trim();

export const setProps = (
	props: Record<string, string | number>,
	el: HTMLElement = document.documentElement,
): void => Object.keys(props).forEach((prop) => setProp(prop, props[prop], el));

export const getProps = (el: HTMLElement = document.documentElement): Record<string, string> => {
	const props: Record<string, string> = {};
	const styles = window.getComputedStyle(el);
	Array.from(styles)
		.filter((prop) => prop.startsWith('--'))
		.forEach((prop) => {
			props[prop] = styles.getPropertyValue(prop).trim();
		});
	return props;
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
