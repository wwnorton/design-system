import React from 'react';
import { LinkComponent, LinkContext } from '../../utilities/link';
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider';

export type AppProviderProps = ThemeProviderProps & {
	/**
	 * When defined, the design system `<Link>` component will render with the
	 * provided link component instead of its own render function.
	 */
	linkComponent?: LinkComponent;
}

/** The main application-level provider for design system configuration. */
export const AppProvider: React.FunctionComponent<AppProviderProps> = ({
	linkComponent,
	colorScheme,
	ignoreOSColorScheme,
	onColorSchemeChange,
	children,
}: AppProviderProps) => (
	<LinkContext.Provider value={linkComponent}>
		<ThemeProvider
			colorScheme={colorScheme}
			ignoreOSColorScheme={ignoreOSColorScheme}
			onColorSchemeChange={onColorSchemeChange}
		>
			{ children }
		</ThemeProvider>
	</LinkContext.Provider>
);
