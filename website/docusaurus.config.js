const path = require('path');

const baseUrl = process.env.BASE_URL || '/';
const base = baseUrl.replace(/\/$/, '');
const url = (process.env.BASE_URL)
	? `https://wwnorton.github.io${base}`
	: 'http://localhost:3000';

module.exports = {
	title: 'Norton Design System',
	tagline: 'Create beautiful, flexible content and applications, born accessible.',
	url,
	baseUrl,
	onBrokenLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'wwnorton',
	projectName: 'design-system',
	themeConfig: {
		navbar: {
			title: 'Norton Design System',
			logo: {
				alt: 'Norton open source',
				src: 'img/seagull-dark.svg',
			},
			items: [
				// {
				// 	to: 'docs/',
				// 	activeBasePath: 'docs',
				// 	label: 'Docs',
				// 	position: 'left',
				// },
				{
					to: 'docs/foundations',
					label: 'Foundations',
					position: 'left',
				},
				{
					to: 'docs/components',
					label: 'Components',
					position: 'left',
				},
				{
					to: 'docs/guides',
					label: 'Guides',
					position: 'left',
				},
				// { to: 'blog', label: 'Blog', position: 'left' },
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
					title: 'External documentation',
					items: [
						// {
						// 	label: 'Blog',
						// 	to: 'blog',
						// },
						{
							label: 'Sassdoc',
							href: `${url}/sassdoc`,
						},
						{
							label: 'Storybook',
							href: `${url}/storybook`,
						},
						{
							label: 'GitHub',
							href: 'https://github.com/wwnorton/design-system',
						},
						{
							label: 'NPM Registry',
							href: 'https://www.npmjs.com/org/wwnds',
						},
					],
				},
				{
					title: 'Changes',
					items: [
						{
							label: 'Changelog',
							href: 'https://github.com/wwnorton/design-system/blob/main/CHANGELOG.md',
						},
						{
							label: 'Releases',
							href: 'https://github.com/wwnorton/design-system/releases',
						},
						{
							label: 'Migration',
							to: 'docs/migration',
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
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					editUrl: 'https://github.com/wwnorton/design-system/edit/main/website/',
					admonitions: {
						customTypes: {
							a11y: {
								svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>',
							},
						},
					},
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
		path.resolve(__dirname, 'plugin-nds.js'),
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
						href: `${base}/img/android-chrome-512x512.png`,
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: `${base}/manifest.json`,
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
						href: `${base}/img/android-chrome-512x512.png`,
					},
					{
						tagName: 'link',
						rel: 'mask-icon',
						href: `${base}/img/seagull-dark.svg`,
						color: 'rgb(50, 71, 94)',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileImage',
						content: `${base}/img/android-chrome-512x512.png`,
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
