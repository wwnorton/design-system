const path = require('path');

/** @type {import('@storybook/core-common').StorybookConfig} */
const storybookConfig = {
	core: {
		builder: {
			name: 'webpack5',
		},
		disableTelemetry: true,
	},
	webpackFinal: (config) => {
		config.module?.rules?.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		});

		config.target = 'browserslist:last 2 versions';

		// Return the altered config
		return config;
	},
	stories: [path.resolve(__dirname, '../packages/react/src/**/*.stories.{ts,tsx,mdx}')],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/addon-a11y',
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
	},
};

module.exports = storybookConfig;
