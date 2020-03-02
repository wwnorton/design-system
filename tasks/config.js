const path = require('path');

const production = ['ci', 'production'].includes(process.env.NODE_ENV);
const copyrightYear = `2019-${(new Date()).getFullYear()}`;

const packageConfig = (packageRoot, src = 'src', dest = 'dist') => {
	const {
		license,
		name,
		version,
	// eslint-disable-next-line global-require,import/no-dynamic-require
	} = require(path.join(__dirname, '..', packageRoot, 'package.json'));
	const srcRoot = `${packageRoot}/${src}`;
	const destRoot = `${packageRoot}/${dest}`;
	const banner = `/***
	 * ${name} v${version}
	 * Copyright ${copyrightYear} W. W. Norton & Company
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
			dest: destRoot,
			watch: `${srcRoot}/**/*.scss`,
		},
		typescript: {
			tsConfig: `${packageRoot}/tsconfig.json`,
			dest: destRoot,
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
