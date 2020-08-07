const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => ({
	name: 'plugin-typescript',
	configureWebpack: () => ({
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: path.resolve(__dirname, '../packages/react'),
					use: [
						require.resolve('ts-loader'),
						{
							loader: require.resolve('react-docgen-typescript-loader'),
							options: {
								tsconfigPath: path.resolve(__dirname, '../packages/react/tsconfig.json'),
							},
						},
					],
				},
			],
		},
		resolve: {
			extensions: ['.ts', '.tsx'],
			plugins: [new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, 'tsconfig.json'),
			})],
		},
	}),
});
