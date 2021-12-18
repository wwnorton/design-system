module.exports = {
	root: true,
	extends: [
		'airbnb',
		'airbnb/hooks',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	settings: {
		'import/extensions': [
			'.js',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
		],
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
			},
			webpack: {
				extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
			},
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'react/function-component-definition': ['error', {
			namedComponents: 'arrow-function',
			unnamedComponents: 'function-expression',
		}],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-props-no-spreading': 'off',
		/**
		 * Avoid export default to improve TypeScript experience. Applicable in
		 * JavaScript as well, though less impactful.
		 * For rationale, see https://basarat.gitbook.io/typescript/main-1/defaultisbad
		 */
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
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
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				indent: 'off',
				'no-tabs': 'off',
				'no-use-before-define': 'off',
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/no-use-before-define': ['error'],
				'react/jsx-filename-extension': [
					'error',
					{
						extensions: ['.jsx', '.tsx'],
					},
				],
				'react/prop-types': 'off',
				'react/static-property-placement': [
					'error',
					'static public field',
				],
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
