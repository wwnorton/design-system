const {
	author,
	license,
	name,
	version,
} = require('../package.json');

const srcRoot = './src';
const destRoot = './dist';
const prod = ['ci', 'production'].includes(process.env.NODE_ENV);
const copyrightYear = `2019-${(new Date()).getFullYear()}`;

module.exports = {
	banner:
		`/***
		 * ${name} v${version}
		 * Copyright ${copyrightYear} ${author}
		 * ${license}
		 ***/
		`.replace(/\t/g, ''),
	prod,
	sourcemaps: !prod,
	srcRoot,
	destRoot,
	sass: {
		src: `${srcRoot}/main.scss`,
		dest: `${destRoot}/css`,
		watch: `${srcRoot}/**/*.scss`,
	},
	typescript: {
		src: `${srcRoot}/**/*.ts`,
		dest: `${destRoot}/js/index.js`,
		watch: [
			`${srcRoot}/**/*.ts`,
			'./tsconfig.json',
		],
	},
};
