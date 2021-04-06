const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { default: ReactDocgenTypescriptPlugin } = require('react-docgen-typescript-plugin');

module.exports = () => ({
	name: 'plugin-nds',
	configureWebpack: () => ({
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: path.resolve(__dirname, '../packages/react'),
					loader: 'ts-loader',
				},
			],
		},
		plugins: [
			new ReactDocgenTypescriptPlugin({
				tsconfigPath: path.resolve(__dirname, '../packages/react/tsconfig.json'),
				include: [path.join(__dirname, '../packages/react/src/**/*!(.stories|.test).tsx')],
				propFilter: (prop) => {
					if (prop.parent) {
						return !prop.parent.fileName.includes('node_modules');
					}
					return true;
				},
			}),
		],
		resolve: {
			extensions: ['.mdx', '.ts', '.tsx'],
			plugins: [new TsconfigPathsPlugin()],
		},
	}),
});
