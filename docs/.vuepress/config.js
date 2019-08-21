const componentsSidebar = require('./sidebars/components');

module.exports = {
	base: process.env.VUEPRESS_BASE || '/',
	title: 'The Norton Design System',
	description: 'Usage guides for the Norton Design System.',
	themeConfig: {
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
