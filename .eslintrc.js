module.exports = {
	root: true,
	extends: [
		'norton',
		'eslint-config-norton/typescript'
	],
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
				'react/jsx-props-no-spreading': 'off'
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
	],
};
