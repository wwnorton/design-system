const postcssPresetEnv = require('postcss-preset-env');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: [
		postcssPresetEnv({
			browsers: (production)
				? [
					'last 2 years',
					'not dead',
					'maintained node versions'
				]
				: [
					'last 1 chrome version',
					'last 1 firefox version',
					'last 1 safari version'
				],
		}),
	],
};
