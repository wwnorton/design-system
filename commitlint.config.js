const { rules } = require('@commitlint/config-conventional');

const types = rules['type-enum'][2];

module.exports = {
	extends: [
		'@commitlint/config-conventional',
		'@commitlint/config-lerna-scopes',
	],
	rules: {
		'type-enum': [2, 'always', [...types, 'visual'].sort()],
	},
};
