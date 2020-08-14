module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		browser: true,
	},
	rules: {
		'react/require-default-props': 'off',
	},
	settings: {
		'import/resolver': {
			webpack: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
	},
};
