const sass = require('sass');

const createTheme = ({ primary, logo, ...rest }) => ({
	primary,
	logo,
	link: primary,
	button: {
		bg: primary,
	},
	sidebar: {
		navLinkActive: primary,
	},
	...rest,
});

const light = createTheme({ primary: 'var(--teal-60)', logo: 'var(--navy-80)' });
const dark = createTheme({ primary: 'var(--teal-40)', logo: 'var(--navy-20)' });

module.exports = {
	pathPrefix: process.env.PATH_PREFIX || '/',
	plugins: [
		{
			resolve: 'gatsby-theme-docz',
			options: {
				title: 'The Norton Design System',
				description: 'Documentation for the Norton Design System',
				menu: ['Home', 'Components', 'Foundations', 'Guides'],
				files: ['site/**/*.{md,markdown,mdx}'],
				typescript: true,
				docgenConfig: {
					searchPatterns: [
						'../packages/react/**/*.{ts,tsx}',
						'!**/node_modules',
					],
				},
				themeConfig: {
					colors: {
						...light,
						modes: {
							dark,
						},
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				implementation: sass,
			},
		},
	],
};
