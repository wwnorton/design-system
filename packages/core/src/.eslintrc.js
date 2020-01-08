module.exports = {
	extends: [
		'norton',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-empty-interface': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				ts: 'never',
			},
		],
	},
	parserOptions: {
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
	},
};
