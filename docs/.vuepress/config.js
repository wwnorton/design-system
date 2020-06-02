const componentsSidebar = require('./sidebars/components');

module.exports = {
	base: process.env.VUEPRESS_BASE || '/',
	title: 'The Norton Design System',
	description: 'Usage guides for the Norton Design System.',
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
			{ text: 'Guides', link: '/guides/' },
			{ text: 'Storybook', link: 'storybook/', target: '_blank', rel: 'noopener noreferrer' },
			{ text: 'Zeplin', link: 'https://app.zeplin.io/project/5d66e28439bbe3139aa846ad' }
		],
		sidebar: {
			'/components/': [
				{
					title: 'Components',
					path: '/components/',
					collapsable: false,
					children: componentsSidebar,
				},
			],
			'/guides/': [
				{
					title: 'Guides',
					path: '/guides/',
					collapsable: false,
					children: ['', 'javascript-style'],
				},
			],
		},

		// Repository info to enable the "edit this page" links
		repo: 'https://gitlab.com/wwnorton/platform/design-system',
		docsDir: 'docs',
    	docsBranch: 'master',
		editLinks: true,

		// Enable the "Last Updated" timestamp
		lastUpdated: true,
	},
	plugins: [
		['@vuepress/pwa', {
			serviceWorker: true,
			updatePopup: true,
		}],
	],
};
