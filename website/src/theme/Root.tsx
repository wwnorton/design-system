import React from 'react';
import { canUseDOM, ColorScheme, AppProvider } from '@wwnds/react';
import Head from '@docusaurus/Head';

const Root: React.FunctionComponent = ({ children }: { children?: React.ReactNode }) => {
	const colorScheme = React.useMemo(() => {
		if (canUseDOM && 'localStorage' in window) {
			const storedScheme = window.localStorage.getItem('nds-color-scheme');
			if (storedScheme) return storedScheme as ColorScheme;
		}
		return undefined;
	}, []);

	React.useEffect(() => {
		if ('indexedDB' in window) {
			window.indexedDB.deleteDatabase('nds');
		}
	}, []);

	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/aoc6aci.css" />
			</Head>
			<AppProvider colorScheme={colorScheme}>
				{ children }
			</AppProvider>
		</>
	);
};

export default Root;	// eslint-disable-line import/no-default-export
