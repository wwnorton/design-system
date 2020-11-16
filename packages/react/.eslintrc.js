module.exports = {
	env: {
		browser: true,
	},
	rules: {
		'react/jsx-props-no-spreading': 'off'
	},
	settings: {
		'import/core-modules':  ['@storybook/react/types-6-0']
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
