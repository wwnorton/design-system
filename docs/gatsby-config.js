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

const light = createTheme({ primary: '#1a8082', logo: '#32475e' });
const dark = createTheme({ primary: '#76cbcc', logo: '#63768a' });

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
		'gatsby-plugin-sass',
	],
};
