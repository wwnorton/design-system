import React from 'react';
import { useMediaQuery } from '../../utilities/mediaQuery';
import { ThemeContext, ColorScheme } from '../../utilities/theme';
import { useLayoutEffect } from '../../utilities/isomorphicLayoutEffect';

const getColorScheme = (
	scheme?: ColorScheme | 'inverse',
	parentScheme?: ColorScheme,
): ColorScheme => {
	if (scheme === 'inverse') {
		if (parentScheme) {
			return (parentScheme === 'light') ? 'dark' : 'light';
		}
		throw new Error('colorScheme cannot be inverted on the root <ThemeProvider>.');
	}
	return scheme || 'light';
};

export type ThemeProviderProps = React.PropsWithChildren<{
	/**
	 * The desired color scheme.
	 *
	 * - `"light"` - dark text on light background.
	 * - `"dark"` - light text on dark background.
	 * - `"inverse"` - the opposite color scheme from the parent `<ThemeProvider>`.
	 * Cannot be used on the root `<ThemeProvider>`.
	 * - `undefined` - use the user's preferred color scheme. If `ignoreOSColorScheme`
	 * is `true`, `"light"` will be used as a fallback.
	 *
	 * Reference: [prefers-color-scheme media query](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme).
	 */
	colorScheme?: ColorScheme | 'inverse';
	/** If set, the user's operating system color scheme setting will be ignored. */
	ignoreOSColorScheme?: boolean;
	/**
	 * A callback function that will trigger any time the `colorScheme` changes.
	 * Use to update the color scheme store when it's changed by the user.
	 */
	onColorSchemeChange?: (scheme: ColorScheme) => void;
}>;

/** A context provider for theming the Norton Design System. */
export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
	colorScheme: schemeProp,
	ignoreOSColorScheme,
	onColorSchemeChange,
	children,
}: ThemeProviderProps) => {
	const parentContext = React.useContext(ThemeContext);
	const parentColorScheme = (parentContext) ? parentContext.colorScheme : undefined;
	const isRoot = parentContext === undefined;

	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
	const preferredScheme = React.useMemo(() => ((prefersDark) ? 'dark' : 'light'), [prefersDark]);
	const prevPreference = React.useRef(preferredScheme);

	const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
		getColorScheme(
			schemeProp || ((ignoreOSColorScheme) ? undefined : preferredScheme),
			parentColorScheme,
		),
	);

	// root <ThemeProvider>: update colorScheme when the user changes their OS scheme
	React.useEffect(() => {
		if (ignoreOSColorScheme || !isRoot) return;
		if (preferredScheme !== prevPreference.current) {
			setColorScheme(preferredScheme);
			prevPreference.current = preferredScheme;
		}
	}, [isRoot, preferredScheme, ignoreOSColorScheme]);

	// root <ThemeProvider>: set data-color-scheme on :root
	useLayoutEffect(() => {
		if (isRoot) {
			if (colorScheme) {
				document.documentElement.setAttribute('data-color-scheme', colorScheme);
			} else {
				document.documentElement.removeAttribute('data-color-scheme');
			}
		}
	}, [colorScheme, isRoot]);

	// child <ThemeProvider>: inverse when parent colorScheme changes
	React.useEffect(() => {
		if (parentColorScheme && schemeProp === 'inverse') {
			setColorScheme((parentColorScheme === 'dark') ? 'light' : 'dark');
		}
	}, [parentColorScheme, schemeProp]);

	React.useEffect(() => {
		if (onColorSchemeChange) onColorSchemeChange(colorScheme);
	}, [colorScheme, onColorSchemeChange]);

	const theme = {
		colorScheme,
		setColorScheme: (scheme: ColorScheme) => setColorScheme(scheme),
	};

	return (
		<ThemeContext.Provider value={theme}>
			{ (isRoot) ? children : <div data-color-scheme={colorScheme}>{ children }</div> }
		</ThemeContext.Provider>
	);
};
