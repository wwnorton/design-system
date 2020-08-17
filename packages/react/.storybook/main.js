const path = require('path');

module.exports = {
	stories: [path.resolve(__dirname, '../src/**/*.stories.{ts,tsx,mdx}')],
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/addon-a11y',
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
				if (prop.parent) {
					return !prop.parent.fileName.includes('node_modules');
				}
				return true;
			},
		},
	}
}
