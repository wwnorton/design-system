const path = require('path');

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
		// TypeScript
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				indent: 'off',
				'no-tabs': 'off',
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/no-empty-interface': 'off',
			},
		},
		// React
		{
			files: ['*.jsx', '*.tsx'],
			env: { browser: true },
			plugins: ['react-hooks'],
			rules: {
				'react/jsx-indent': ['error', 'tab'],
				'react/jsx-indent-props': ['error', 'tab'],
				'react/jsx-filename-extension': [
					'error',
					{
						extensions: ['.jsx', '.tsx'],
					},
				],
				'react/jsx-props-no-spreading': ['off'],
				'react/static-property-placement': [
					'error',
					'property assignment',
					{
						defaultProps: 'static public field',
					},
				],
				'react-hooks/rules-of-hooks': 'error',
				'react-hooks/exhaustive-deps': 'warn',
			},
		},
		// Storybook
		{
			files: ['*.stories.tsx'],
			rules: {
				'import/no-default-export': 'off',
			}
		}
	],
};
