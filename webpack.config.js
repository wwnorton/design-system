const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@nds': path.resolve(__dirname, 'packages'),
			react: path.resolve(__dirname, 'node_modules/react'),
			'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
		},
	},
};
