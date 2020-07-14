module.exports = {
	root: true,
	extends: [
		'airbnb',
		'norton',
	],
	rules: {
		// https://basarat.gitbook.io/typescript/main-1/defaultisbad
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				packageDir: [
					'.',
					'./docs',
					'./packages/core',
					'./packages/react',
				],
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	overrides: [
		// Storybook
		{
			files: ['*.stories.tsx'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
	],
};
