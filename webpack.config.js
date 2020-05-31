const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@nds': path.resolve(__dirname, 'packages'),
		},
	},
};
