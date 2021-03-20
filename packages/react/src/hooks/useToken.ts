import {
	useEffect, useLayoutEffect, useMemo, useState,
	Dispatch, SetStateAction,
} from 'react';
import { canUseDOM } from '../utilities/environment';

const getVar = (
	varName: string,
	el: HTMLElement | null = document.documentElement,
): string | null => {
	if (!canUseDOM || !el) return null;
	return window.getComputedStyle(el).getPropertyValue(`--${varName}`).trim();
};

const setVar = (
	varName: string,
	value: string | number,
	el: HTMLElement | null = document.documentElement,
): void => {
	if (!canUseDOM || !el) return;
	el.style.setProperty(`--${varName}`, value.toString());
};

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

/** Use a design token. Gets or sets the token as a CSS custom property. */
export const useToken = ({
	name,
	value,
	el = document.documentElement,
}: UseTokenProps): [string | number | null, Dispatch<SetStateAction<string | number | null>>] => {
	const prefixedName = useMemo(() => `nds-${name}`, [name]);
	const [token, setToken] = useState(value || null);

	// read the value from the element
	useEffect(() => {
		const val = getVar(prefixedName, el);
		if (val) setToken(val);
	}, [prefixedName, el]);

	// set the value on the element
	useLayoutEffect(() => {
		if (value) setVar(prefixedName, value, el);
	}, [value, prefixedName, el]);

	return [token, setToken];
};
