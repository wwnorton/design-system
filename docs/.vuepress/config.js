const { URL } = require('url');
const componentsSidebar = require('./sidebars/components');

let base = '/'
if (process.env.CI_PAGES_URL) {
	const { pathname } = new URL(process.env.CI_PAGES_URL);
	base = `${pathname}/`;
}

module.exports = {
	base,
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
