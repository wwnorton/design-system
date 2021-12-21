const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {
	default: ReactDocgenTypescriptPlugin,
} = require('@storybook/react-docgen-typescript-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = () => ({
	name: 'plugin-nds',
	configureWebpack: (_, isServer, { getStyleLoaders }) => ({
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: path.resolve(__dirname, '../packages/react'),
					loader: 'ts-loader',
				},
				{
					test: /\.s[ca]ss$/,
					oneOf: [
						{
							test: /\.module\.s[ca]ss$/,
							use: [
								...getStyleLoaders(isServer, {
									modules: {
										localIdentName: (isProd)
											? '[local]_[hash:base64:4]'
											: '[local]_[path][name]',
										exportOnlyLocals: isServer,
									},
									importLoaders: 2,
									sourceMap: !isProd,
								}),
								{
									loader: 'sass-loader',
								},
							],
						},
						{
							use: [
								...getStyleLoaders(isServer),
								{
									loader: 'sass-loader',
								},
							],
						},
					],
				},
			],
		},
		plugins: [
			new ReactDocgenTypescriptPlugin({
				tsconfigPath: path.resolve(
					__dirname,
					'../packages/react/tsconfig.json',
				),
				include: [
					path.join(
						__dirname,
						'../packages/react/src/**/*!(.stories|.test).tsx',
					),
				],
				propFilter: (prop) => {
					if (prop.parent) {
						return !prop.parent.fileName.includes('node_modules');
					}
					return true;
				},
			}),
		],
		resolve: {
			alias: {
				'@website': path.resolve(__dirname, 'src'),
			},
			extensions: ['.mdx', '.ts', '.tsx'],
			plugins: [new TsconfigPathsPlugin()],
		},
	}),
});
