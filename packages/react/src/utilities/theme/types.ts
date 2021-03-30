export type ColorScheme = 'light' | 'dark';

export interface Theme {
	colorScheme?: ColorScheme;
	setColorScheme?: (scheme: ColorScheme) => void;
}
