module.exports = {
	root: true,
	extends: [
		'norton/react',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				packageDir: [
					'.',
					'./packages/core',
					'./packages/react',
					'./website',
				],
			},
		],
		'react/function-component-definition': ['error', {
			namedComponents: 'arrow-function',
			unnamedComponents: 'function-expression',
		}],
		// Most of our components extend an HTML element's interface, and we use
		// props spreading to allow access to that interface. This should only be
		// done for low-level component libraries.
		'react/jsx-props-no-spreading': 'off',
	},
	overrides: [
		// TypeScript
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				// Disable prop-types since ESLint has trouble with TypeScript-defined props
				// and TypeScript provides better props typing anyway
				'react/prop-types': 'off',
				'react/require-default-props': 'off',
				'react/default-props-match-prop-types': 'off',
			},
		},
		// Storybook
		{
			files: ['*.stories.tsx'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
		// MDX
		{
			files: ['*.mdx'],
			extends: ['plugin:mdx/recommended'],
			rules: {
				'max-len': 'off',
				semi: 'off',
				'react/jsx-indent': 'off',
				'react/jsx-filename-extension': [
					'error',
					{ extensions: ['.jsx', '.mdx', '.tsx'] },
				],
			},
		},
		// Tests
		{
			files: ['*.test.ts', '*.test.tsx'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	],
};
