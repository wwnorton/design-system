import {
	useEffect, useMemo, useState,
} from 'react';
import { prefix, canUseDOM } from '../config';

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

/** Use a design token. Gets and sets the token as a CSS custom property. */
export const useToken = ({
	name,
	value,
	el = document.documentElement,
}: {
	/** The token's name. Note that this shouldn't begin with `--`. */
	name: string;
	/**
	 * The token's value. If undefined, the initial value will be retrieved by
	 * looking up the token as a CSS custom property.
	 */
	value?: string | number | null;
	/** The element where the CSS custom property should be stored/retrieved. */
	el: HTMLElement | null;
}): [string | number | null, React.Dispatch<React.SetStateAction<string | number | null>>] => {
	const prefixedName = useMemo(() => prefix(name), [name]);
	const [token, setToken] = useState(value || getVar(prefixedName, el));

	useEffect(() => {
		if (el) {
			setToken(
				(typeof value === 'undefined') ? getVar(prefixedName, el) : value,
			);
		}
	}, [el, value]);

	useEffect(() => {
		if (el && token) {
			setVar(prefixedName, token, el);
		}
	}, [el, token, prefixedName]);

	return [token, setToken];
};
