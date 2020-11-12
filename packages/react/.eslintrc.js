module.exports = {
	env: {
		browser: true,
	},
	rules: {
		'react/jsx-props-no-spreading': 'off'
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
