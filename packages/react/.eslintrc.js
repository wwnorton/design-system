module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		browser: true,
	},
	overrides: [
		{
			files: ['*.test.ts', '*.test.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	],
};
