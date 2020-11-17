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
			files: ['src/theme/Navbar/index.tsx', 'src/theme/Color/index.tsx', 'src/pages/index.tsx'],
			rules: {
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',

			}
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
