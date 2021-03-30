import React from 'react';
import { LinkComponent, LinkContext } from '../../utilities/link';
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider';

export type AppProviderProps = ThemeProviderProps & {
	linkComponent?: LinkComponent;
}

export const AppProvider: React.FunctionComponent<AppProviderProps> = ({
	linkComponent,
	colorScheme,
	ignoreOSColorScheme,
	children,
}: AppProviderProps) => (
	<LinkContext.Provider value={linkComponent}>
		<ThemeProvider colorScheme={colorScheme} ignoreOSColorScheme={ignoreOSColorScheme}>
			{ children }
		</ThemeProvider>
	</LinkContext.Provider>
);
