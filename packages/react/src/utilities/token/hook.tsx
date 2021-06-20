import React, {
	useEffect, useMemo, useState,
} from 'react';
import { useLayoutEffect } from '../isomorphicLayoutEffect';
import { UseTokenProps } from './types';

/** Use a design token. Gets or sets the token as a CSS custom property. */
export const useToken = ({
	name,
	value,
	el = document.documentElement,
}: UseTokenProps): [
	string | number | null,
	React.Dispatch<React.SetStateAction<string | number | null>>,
] => {
	const [token, setToken] = useState(value || null);
	const prefixedName = useMemo(() => {
		if (name.startsWith('nds-')) return name;
		return `nds-${name}`;
	}, [name]);

	// read the value from the element
	useEffect(() => {
		if (el) {
			const val = window.getComputedStyle(el)
				.getPropertyValue(`--${prefixedName}`)
				.trim();
			if (val) setToken(val);
		}
	}, [prefixedName, el]);

	// set the value on the element
	useLayoutEffect(() => {
		if (el && value) {
			el.style.setProperty(`--${prefixedName}`, value.toString());
		}
	}, [value, prefixedName, el]);

	return [token, setToken];
};
