module.exports = {
	rules: {
		'import/no-unresolved': [
			2,
			{ ignore: ['^@theme', '^@docusaurus', '^@generated', '^@wwnds'] },
		],
		'react/jsx-indent-props': [2, 'tab'],
	},
};
