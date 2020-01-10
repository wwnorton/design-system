const path = require('path');

const production = ['ci', 'production'].includes(process.env.NODE_ENV);
const copyrightYear = `2019-${(new Date()).getFullYear()}`;

const packageConfig = (packageRoot, src = 'src', dest = 'dist') => {
	const {
		author,
		license,
		name,
		version,
	// eslint-disable-next-line global-require,import/no-dynamic-require
	} = require(path.join(__dirname, '..', packageRoot, 'package.json'));
	const srcRoot = `${packageRoot}/${src}`;
	const destRoot = `${packageRoot}/${dest}`;
	const banner = `/***
	 * ${name} v${version}
	 * Copyright ${copyrightYear} ${author}
	 * ${license}
	 **/
	`.replace(/\t/g, '');
	return {
		options: {
			production,
			sourcemaps: !production,
			banner,
			srcRoot,
			destRoot,
		},
		sass: {
			src: `${srcRoot}/main.scss`,
			dest: `${destRoot}/css`,
			watch: `${srcRoot}/**/*.scss`,
		},
		typescript: {
			tsConfig: `${packageRoot}/tsconfig.json`,
			src: `${srcRoot}/**/*.{ts,tsx}`,
			dest: `${destRoot}/js`,
			watch: [
				`${srcRoot}/**/*.{ts,tsx}`,
				'./tsconfig.json',
			],
		},
	};
};

module.exports = {
	core: packageConfig('./packages/core'),
	react: packageConfig('./packages/react'),
};
