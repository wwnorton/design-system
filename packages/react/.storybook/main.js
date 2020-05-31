const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootConfig = require('../../../webpack.config');

const tsConfig = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
	stories: [path.resolve(__dirname, '../src/**/*.stories.{ts,tsx,mdx}')],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
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
				forkTsCheckerWebpackPluginOptions: {
					tsconfig: tsConfig,
				},
				tsLoaderOptions: {
					configFile: tsConfig,
				},
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
	],
	webpackFinal: (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				plugins: [
					new TsconfigPathsPlugin({ configFile: tsConfig }),
				],
				alias: rootConfig.resolve.alias,
			},
		};
	},
}
