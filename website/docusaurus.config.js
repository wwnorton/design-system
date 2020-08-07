const path = require('path');

module.exports = {
	title: 'Norton Design System',
	tagline: 'Create beautiful, flexible, content-focused products, born accessible.',
	url: 'https://wwnorton.github.io/design-system',
	baseUrl: process.env.BASE_URL || '/',
	onBrokenLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'wwnorton',
	projectName: 'design-system',
	themeConfig: {
		navbar: {
			title: 'Design System',
			logo: {
				alt: 'Norton open source',
				src: 'img/seagull-dark.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/wwnorton/design-system',
					'aria-label': 'GitHub',
					title: 'GitHub',
					position: 'right',
					className: 'navbar__link--github',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Guides',
					items: [
						{
							label: 'Migration',
							to: 'docs/guides/migration',
						},
					],
				},
				{
					title: 'W. W. Norton & Company',
					items: [
						{
							label: 'Books that Live',
							href: 'https://wwnorton.com/who-we-are',
						},
						{
							label: 'Catalog',
							href: 'https://wwnorton.com/catalog',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/wwnorton',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: 'blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/wwnorton/design-system',
						},
					],
				},
			],
			logo: {
				alt: 'Norton open source',
				src: 'img/seagull-light.svg',
				href: 'https://www.wwnorton.com',
			},
			copyright: `Copyright © ${new Date().getFullYear()} W. W. Norton & Company.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					// It is recommended to set document id as docs home page (`docs/` path).
					homePageId: 'introduction',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/wwnorton/design-system/edit/main/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/wwnorton/design-system/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/scss/main.scss'),
				},
			},
		],
	],
	themes: ['@docusaurus/theme-live-codeblock'],
	plugins: [
		path.resolve(__dirname, 'tsDocGen'),
		'docusaurus-lunr-search',
		[
			'docusaurus-plugin-sass',
			{
				// eslint-disable-next-line global-require
				implementation: require('sass'),
			},
		],
	],
};
