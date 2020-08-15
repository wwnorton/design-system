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
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
			],
			env: {
				browser: true,
			},
			rules: {
				'react/require-default-props': 'off',
			},
		},
	],
};
