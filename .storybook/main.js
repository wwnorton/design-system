const path = require('path');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	webpackFinal: (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		});

		config.target = 'browserslist:last 2 versions';

		// Return the altered config
		return config;
	},
	stories: [path.resolve(__dirname, '../packages/react/src/**/*.stories.{ts,tsx,mdx}')],
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/addon-a11y',
		'@storybook/addon-controls',
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
