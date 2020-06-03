const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				react: path.resolve(__dirname, '../node_modules/react'),
				'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
			},
		},
	});
};
