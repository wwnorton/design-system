const componentsSidebar = require('./sidebars/components');

module.exports = {
	base: process.env.VUEPRESS_BASE || '/',
	title: 'The Norton Design System',
	description: 'Usage guides for the Norton Design System.',
	serviceWorker: true,
	head: [
		['link', { rel: 'icon', href: '/assets/images/seagull.svg' }],
		['link', { rel: 'icon', href: '/assets/images/favicon.32x32.png' }],
		['link', { rel: 'icon', href: '/assets/images/favicon.16x16.png' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#2e445c' }],
	],
	themeConfig: {
		logo: '/assets/images/seagull.svg',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Components', link: '/components/' },
		],
		sidebar: {
			'/components/': [
				{
					title: 'Components',
					collapsable: false,
					children: componentsSidebar,
				},
			],
		},
	},
};
