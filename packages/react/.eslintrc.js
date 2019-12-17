module.exports = {
	extends: [
		'airbnb',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-empty-interface': 'off',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx']
			}
		],
		'react/jsx-props-no-spreading': ['off'],
		'react/static-property-placement': [
			'error',
			'property assignment',
			{
				defaultProps: 'static public field'
			}
		]
	},
	overrides: [
		{
			files: ['**/*.stories.{js,jsx,ts,tsx}'],
			rules: {
				'import/no-extraneous-dependencies': 'off'
			}
		}
	],
	settings: {
		react: {
			// explicitly set react version so it's available when eslint is run from root
			version: '16.12',
		},
	},
};
