const componentsSidebar = require('./sidebars/components');

module.exports = {
	title: 'The Norton Design System',
	description: 'Usage guides for the Norton Design System.',
	base: (process.env.CI_PAGES_URL)
		? `${process.env.CI_PAGES_URL.replace('https://wwnorton.gitlab.io', '')}/`
		: '/',
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
