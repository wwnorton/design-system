const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [
				new TsconfigPathsPlugin({
					configFile: path.resolve(__dirname, 'tsconfig.json'),
				}),
			],
			alias: {
				// use root react & react-dom
				react: path.resolve(__dirname, '../node_modules/react'),
				'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
			},
		},
	});
};
