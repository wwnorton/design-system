module.exports = {
	root: true,
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
		'scss/at-function-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
		'scss/at-mixin-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
		'scss/dollar-variable-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
		/**
		 * temporarily disable *-empty-lin-before rules
		 * See https://github.com/stylelint/stylelint/issues/4917
		 */
		'at-rule-empty-line-before': null,
		'declaration-empty-line-before': null,
	},
	ignoreFiles: ['**/*.jsx', '**/*.tsx'],
};
