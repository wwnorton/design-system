const sass = require('sass');

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
						text: 'var(--body-text)',
						background: 'var(--body-bg)',
						primary: 'var(--primary)',
						logo: 'var(--navy-80)',
						white: 'var(--white)',
						blue: 'var(--blue-60)',
						muted: 'var(--text-muted)',
						link: 'var(--link-color)',
						border: 'var(--base-30)',

					},
					fonts: {
						body: 'var(--font-family-base)',
						heading: 'var(--font-family-heading)',
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
