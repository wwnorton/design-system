const path = require('path');	// eslint-disable-line

module.exports = () => ({
	name: 'ts-docgen',
	configureWebpack: () => ({
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: path.resolve(__dirname, '../packages/react/src'),
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
		resolve: { extensions: ['.ts', '.tsx'] },
	}),
});
