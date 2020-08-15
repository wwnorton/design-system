const path = require('path');

module.exports = {
	stories: [path.resolve(__dirname, '../src/**/*.stories.{ts,tsx,mdx}')],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		{
			name: '@storybook/preset-scss',
			options: {
				sassLoaderOptions: {
					implementation: require('sass'),
				},
			},
		},
	],
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => {
				if (prop.parent) return !/node_modules/.test(prop.parent.fileName);
				return true;
			},
		},
	}
}
