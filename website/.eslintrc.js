module.exports = {
	rules: {
		'import/no-unresolved': [
			2,
			{ ignore: ['^@theme', '^@docusaurus', '^@generated', '^@wwnds'] },
		],
		'react/jsx-indent-props': [2, 'tab'],
	},
	settings: {
		'import/core-modules': ['path'],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			env: {
				browser: true,
			},
			rules: {
				'react/require-default-props': 'off',
			},
		},
		{
			files: ['*.mdx'],
			rules: {
				'import/no-unresolved': 'off',
				'import/extensions': 'off',
				'react-hooks/rules-of-hooks': 'off'
			}
		}
	],
};
