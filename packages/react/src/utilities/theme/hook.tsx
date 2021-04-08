import { useContext } from 'react';
import { ThemeContext } from './context';
import { Theme } from './types';

export const useTheme = (): Theme => {
	const theme = useContext(ThemeContext);
	if (!theme) {
		throw new Error('No theme provided. To provide a theme, wrap your application in a <ThemeProvider>');
	}
	return theme;
};
