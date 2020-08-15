const path = require('path');

const basePath = (process.env.BASE_URL)
	? 'https://wwnorton.github.io/design-system'
	: 'http://localhost:3000';

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
							to: 'docs/migration',
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
							label: 'Sassdoc',
							href: `${basePath}/sassdoc`,
						},
						{
							label: 'Storybook',
							href: `${basePath}/storybook`,
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
					homePageId: 'introduction',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					editUrl: 'https://github.com/wwnorton/design-system/edit/main/website/',
				},
				blog: {
					showReadingTime: true,
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
		path.resolve(__dirname, 'plugin-typescript.js'),
		'docusaurus-lunr-search',
		[
			'docusaurus-plugin-sass',
			{
				// eslint-disable-next-line global-require
				implementation: require('sass'),
			},
		],
		[
			'@docusaurus/plugin-pwa',
			{
				debug: process.env.NODE_ENV !== 'production',
				offlineModeActivationStrategies: ['appInstalled', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json',
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(26, 128, 130)',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-status-bar-style',
						content: '#000',
					},
					{
						tagName: 'link',
						rel: 'apple-touch-icon',
						href: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'link',
						rel: 'mask-icon',
						href: '/img/seagull-dark.svg',
						color: 'rgb(50, 71, 94)',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileImage',
						content: '/img/android-chrome-512x512.png',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileColor',
						content: '#000',
					},
				],
			},
		],
	],
};
