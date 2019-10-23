const path = require('path');

module.exports = ({ config }) => {
	// TypeScript loader
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('awesome-typescript-loader')
			},
			// Optional
			{
				loader: require.resolve('react-docgen-typescript-loader')
			}
		]
	});
	config.resolve.extensions.push('.ts', '.tsx');

	// Sass (.scss) loader
	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: [
			path.resolve(__dirname, '../'),
			path.resolve(__dirname, '../../'),
		],
	});

	return config;
};
