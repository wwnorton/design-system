module.exports = {
	root: true,
	extends: [
		'airbnb',
		'norton',
	],
	rules: {
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
