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
		'order/order': [
			[
				'custom-properties',
				'dollar-variables',
				{
					type: 'at-rule',
					name: 'extend',
				},
				'declarations',
				'rules',
			],
		],
	},
	ignoreFiles: ['**/*.jsx', '**/*.tsx'],
};
