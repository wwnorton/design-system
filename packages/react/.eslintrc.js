module.exports = {
	extends: [
		'airbnb',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		indent: 'off',
		'no-tabs': 'off',
		'react/jsx-indent': [2, 'tab'],
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
		'react/jsx-props-no-spreading': [
			'error',
			{
				html: 'ignore',
				custom: 'enforce'
			}
		],
		'react/static-property-placement': [
			'error',
			'property assignment',
			{
				defaultProps: 'static public field'
			}
		]
	}
};
