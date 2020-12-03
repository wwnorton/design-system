const del = require('del');
const gulp = require('gulp');
const fiber = require('fibers');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const corePackage = require('./packages/core/package.json');
const reactPackage = require('./packages/react/package.json');

sass.compiler = require('sass');

const production = ['ci', 'production'].includes(process.env.NODE_ENV);
const copyrightYear = `2019-${(new Date()).getFullYear()}`;

const createBanner = ({
	name, version, license, homepage,
}) => `/***
 * ${name} v${version}
 * Copyright ${copyrightYear} W. W. Norton & Company
 * Licensed under the ${license} license found in the LICENSE file in the root
 * directory at ${homepage}.
 **/
`;

const clean = () => del([
	'./packages/*/dist',
	'./website/.docusaurus',
	'./.nyc_output',
	'./coverage',
	'./public',
]);

const cleanDocs = () => del([
	'./website/.docusaurus',
	'./.nyc_output',
	'./coverage',
	'./public',
]);
cleanDocs.displayName = 'clean:docs';

const cleanAll = gulp.parallel(clean, cleanDocs);
cleanAll.displayName = 'clean:all';

const createSass = ({ src, dest }) => () => gulp.src(src, {
	sourcemaps: !production,
	since: gulp.lastRun(sass),
})
	.pipe(
		sass({
			fiber,
			outputStyle: (production) ? 'compressed' : 'expanded',
		}).on('error', sass.logError),
	)
	.pipe(
		postcss([
			postcssPresetEnv(),
		]),
	)
	.pipe(
		header(createBanner(corePackage)),
	)
	.pipe(
		gulp.dest(dest, { sourcemaps: !production && '.' }),
	);

const createTs = (cwd) => shell.task('npm run build', { cwd });

const createJsBanner = (
	cwd, { name, version, license },
) => () => gulp.src('dist/**/*.js', { cwd })
	.pipe(header(createBanner({ name, version, license })))
	.pipe(gulp.dest('dist', { cwd }));

// `@wwnds/core`
const coreSass = createSass({
	src: [
		'./packages/core/src/main.scss',
		'./packages/core/src/tokens.scss',
	],
	dest: './packages/core/dist',
});
coreSass.displayName = 'core:sass';
const coreTs = createTs('./packages/core');
coreTs.displayName = 'core:ts';
const coreBanner = createJsBanner('./packages/core', corePackage);
coreBanner.displayName = 'core:banner';

const tsCore = gulp.series(coreTs, coreBanner);
tsCore.displayName = 'ts:core';

const core = gulp.parallel(coreSass, tsCore);

// `@wwnds/react`
const reactTs = createTs('./packages/react');
reactTs.displayName = 'react:ts';
const reactBanner = createJsBanner('./packages/react', reactPackage);
reactBanner.displayName = 'react:banner';

const tsReact = gulp.series(reactTs, reactBanner);
tsReact.displayName = 'ts:react';

const react = gulp.parallel(tsReact);

// typescript/sass
const sassTask = gulp.parallel(coreSass);
sassTask.displayName = 'sass';
const ts = gulp.parallel(tsCore, tsReact);

exports.clean = clean;
exports.cleanDocs = cleanDocs;
exports.cleanAll = cleanAll;
exports.sass = sassTask;
exports.ts = ts;
exports.core = core;
exports.react = react;

const buildLib = gulp.series(
	clean,
	gulp.parallel(core, react),
);
buildLib.displayName = 'build';

exports.buildLib = buildLib;
exports.default = gulp.series(
	clean,
	gulp.parallel(core, react),
);
