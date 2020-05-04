module.exports = {
	extends: [
		'stylelint-config-norton',
	],
	rules: {
		'selector-class-pattern': [
			'^[a-z0-9\\-_]+$',
			{
				message: 'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
			},
		],
	},
	ignoreFiles: ['**/*.jsx', '**/*.tsx'],
};
