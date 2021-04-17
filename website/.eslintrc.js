module.exports = {
	env: {
		browser: true,
	},
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'react/require-default-props': 'off',
		'import/no-unresolved': ['error', { ignore: ['^@docusaurus', '^@theme', '^@wwnds'] }],
	},
};
