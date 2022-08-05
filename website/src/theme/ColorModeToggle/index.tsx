import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { Switch, Icon, useTheme } from '@wwnds/react';

const ColorModeToggle = () => {
	const { setColorMode } = useColorMode();
	const { colorMode: { disableSwitch } } = useThemeConfig();
	const { colorScheme, setColorScheme } = useTheme();
	const isDarkTheme = colorScheme === 'dark';

	// use NDS colorScheme as source of truth, not Docusaurus
	const toggle = (checked: boolean) => {
		setColorScheme((checked) ? 'dark' : 'light');
	};

	// update Docusaurus theme when NDS colorScheme changes
	React.useEffect(() => {
		setColorMode(colorScheme);
	}, [colorScheme, setColorMode]);

	return (
		<Switch
			label="Dark mode"
			checked={isDarkTheme}
			disabled={disableSwitch}
			onToggle={toggle}
			tipped
		>
			<Icon
				icon={{
					d: (isDarkTheme)
						? 'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'
						: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
				}}
				color={(!isDarkTheme) ? 'var(--nds-yellow-50)' : undefined}
			/>
		</Switch>
	);
};

export default React.memo(ColorModeToggle);
