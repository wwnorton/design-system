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
const banner = `/***
* ${name} v${version}
* Copyright ${copyrightYear} ${author}
* ${license}
***/`;

module.exports = {
	banner,
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
		dest: `${destRoot}/js`,
		watch: [
			`${srcRoot}/**/*.ts`,
			'./tsconfig.json',
		],
	},
};
