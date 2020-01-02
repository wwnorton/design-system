const path = require('path');

module.exports = [
	{
		name: '@storybook/preset-scss',
		options: {
			sassLoaderOptions: {
				implementation: require('sass'),
			},
		},
	},
	{
		name: '@storybook/preset-typescript',
		options: {
			include: [path.resolve(__dirname, '../src')],
			tsDocgenLoaderOptions: {
				// filter out HTML props
				// https://github.com/styleguidist/react-docgen-typescript#parseroptions
				propFilter(prop) {
					if (prop.parent) {
						return !prop.parent.fileName.includes('node_modules');
					}
					return true;
				},
			},
		},
	},
];
