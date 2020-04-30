module.exports = {
	extends: [
		'airbnb',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		'react-hooks',
	],
	env: {
		browser: true,
	},
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
		],
		'react-hooks/rules-of-hooks': 'error',
    	'react-hooks/exhaustive-deps': 'warn',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: [
					'.storybook/**',
					'test/**',
					'**/*.stories.{js,jsx,ts,tsx}',
				],
				optionalDependencies: false,
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
	settings: {
		react: {
			// explicitly set react version so it's available when eslint is run from root
			// https://github.com/yannickcr/eslint-plugin-react/issues/2218
			version: 'latest',
		},
	},
};
