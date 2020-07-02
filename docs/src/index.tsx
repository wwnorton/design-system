/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui';
import { theme, useConfig, ComponentsProvider } from 'docz';
import defaultTheme from 'gatsby-theme-docz/src/theme';
import components from './gatsby-theme-docz/components';

interface ThemeProps {
	children?: React.ReactNode;
}

const Theme: React.FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
	const config = useConfig();
	return (
		<ThemeProvider theme={config.themeConfig}>
			<ComponentsProvider components={components}>
				{/* eslint-disable-next-line react/jsx-pascal-case */}
				<Styled.root>{children}</Styled.root>
			</ComponentsProvider>
		</ThemeProvider>
	);
};

export default theme(defaultTheme)(Theme);
