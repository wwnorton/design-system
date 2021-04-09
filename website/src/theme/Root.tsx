import React from 'react';
import { canUseDOM, ColorScheme, AppProvider } from '@wwnds/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

const COLOR_SCHEME_KEY = 'nds-color-scheme';

const Root: React.FunctionComponent = ({ children }: { children?: React.ReactNode }) => {
	// get the initial color scheme from local storage
	const colorScheme = React.useMemo(() => {
		if (canUseDOM && 'localStorage' in window) {
			const storedScheme = window.localStorage.getItem(COLOR_SCHEME_KEY);
			if (storedScheme) return storedScheme as ColorScheme;
		}
		return undefined;
	}, []);

	// update local storage any time the color scheme changes
	const storeScheme = (scheme: ColorScheme): void => {
		if ('localStorage' in window) {
			window.localStorage.setItem(COLOR_SCHEME_KEY, scheme);
		}
	};

	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/aoc6aci.css" />
			</Head>
			<AppProvider
				linkComponent={Link}
				colorScheme={colorScheme}
				onColorSchemeChange={storeScheme}
			>
				{ children }
			</AppProvider>
		</>
	);
};

export default Root;	// eslint-disable-line import/no-default-export
