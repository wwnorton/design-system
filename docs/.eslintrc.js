module.exports = {
	env: {
		browser: true,
	},
	rules: {
		'import/no-default-export': 'off',
	},
	settings: {
		'import/core-modules': [
			// dependencies of gatsby-theme-docz that we need to use for theme shadowing
			'@emotion/core',
			'@emotion/styled',
			'react-feather',
			'theme-ui',
		],
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};
