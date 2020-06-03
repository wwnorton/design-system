module.exports = {
	env: {
		browser: true,
	},
	rules: {
		'import/no-default-export': 'off',
	},
	settings: {
		'import/core-modules': [
			'@nds/core',
			'@nds/react',

			// dependencies of gatsby-theme-docz that we need to use for theme shadowing
			'@emotion/core',
			'@emotion/styled',
			'react-feather',
			'theme-ui',
		],
	},
};
