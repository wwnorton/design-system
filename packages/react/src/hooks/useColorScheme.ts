import {
	useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import localForage from 'localforage';
import { canUseDOM } from '../config';
import { useConfig } from './useConfig';

/** The IndexedDB or localStorage key name where the color scheme will be stored. */
export const STORE_KEY = 'colorScheme';
/** The data- attribute that stores the scheme on the `:root` element. */
export const STORE_ATTR = 'data-color-scheme';

type ColorScheme = ReturnType<typeof useConfig>['colorScheme'];

const getInitialScheme = (): ColorScheme => {
	if (!canUseDOM) return 'light';
	const dataScheme = document.documentElement.getAttribute(STORE_ATTR)
		// fallback for docs: docusaurus uses `data-theme`
		|| document.documentElement.getAttribute('data-theme');
	return (dataScheme === 'dark') ? 'dark' : 'light';
};

/**
 * Use or set the color scheme. The set color scheme will be set as a `data-scheme`
 * on the `:root` element (`<head>`) and a `colorScheme` key will be added to the
 * client storage.
 */
export const useColorScheme = (): {
	/** Indicates that the current color scheme is "dark". */
	isDark: boolean;
	/** Indicates that the current color scheme is "light". */
	isLight: boolean;
	/** Set the dark color scheme. */
	setDark: () => void;
	/** Set the light color scheme. */
	setLight: () => void;
	/**
	 * The user's operating system color scheme as determined by the
	 * `prefers-color-scheme` media query.
	 * See [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
	 */
	preferred?: ColorScheme;
} => {
	const { colorScheme: fallback } = useConfig();
	const [colorScheme, setColorScheme] = useState<ColorScheme>(getInitialScheme());
	const [preferred, setPreferred] = useState<ColorScheme>();
	const prev = useRef<ColorScheme>(colorScheme);

	// get the stored and preferred color scheme to set the initial value
	useEffect(() => {
		const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const lightQuery = window.matchMedia('(prefers-color-scheme: light)');

		const initialPreferred = (darkQuery.matches) ? 'dark' : 'light';
		setPreferred(initialPreferred);

		localForage.getItem<ColorScheme>(STORE_KEY).then((stored) => {
			if (stored !== prev.current) {
				setColorScheme(stored || initialPreferred || fallback);
			}
		});

		// also set up listeners to update the colorScheme when `prefers-color-scheme` changes
		const createHandler = (scheme: ColorScheme) => (
			{ matches }: Partial<MediaQueryListEvent>,
		): void => {
			if (matches) {
				setPreferred(scheme);
				setColorScheme(scheme);
			}
		};
		const darkHandler = createHandler('dark');
		const lightHandler = createHandler('light');

		darkQuery.addEventListener('change', darkHandler);
		lightQuery.addEventListener('change', lightHandler);

		return () => {
			darkQuery.removeEventListener('change', darkHandler);
			lightQuery.removeEventListener('change', lightHandler);
		};
	}, [fallback]);

	// when color scheme changes, update the stored value and `[data-scheme]` on the `:root`
	useLayoutEffect(() => {
		if (colorScheme) {
			document.documentElement.setAttribute(STORE_ATTR, colorScheme);
			localForage.setItem(STORE_KEY, colorScheme);
		}
		prev.current = colorScheme;
	}, [colorScheme]);

	return {
		isDark: colorScheme === 'dark',
		isLight: colorScheme === 'light',
		setDark: () => setColorScheme('dark'),
		setLight: () => setColorScheme('light'),
		preferred,
	};
};
