module.exports = {
	title: 'The Norton Design System',
	description: 'Usage guides for the Norton Design System\'s components.',
	base: (process.env.CI_PAGES_URL)
		? process.env.CI_PAGES_URL.replace('https://wwnorton.gitlab.io', '')
		: '/',
};
