module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		browser: true,
	},
	rules: {
		'import/no-unresolved': [
			2,
			{ ignore: ['^@theme', '^@docusaurus', '^@generated', '^@wwnds'] },
		],
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
