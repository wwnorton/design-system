const autoprefixer = require('autoprefixer');
const fiber = require('fibers');
const gulp = require('gulp');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const {
	banner,
	prod,
	sourcemaps,
	sass: paths,
} = require('./config');

sass.compiler = require('sass');

const sassTask = () => gulp.src(paths.src, {
	sourcemaps,
	since: gulp.lastRun(sassTask),
})
	.pipe(
		sass({
			fiber,
			outputStyle: (prod) ? 'compressed' : 'expanded',
		}).on('error', sass.logError),
	)
	.pipe(
		postcss([
			autoprefixer(),
		]),
	)
	.pipe(
		header(banner),
	)
	.pipe(
		rename({
			suffix: (prod) ? '.min' : '',
		}),
	)
	.pipe(gulp.dest(paths.dest, {
		sourcemaps: sourcemaps && '.',
	}));
sassTask.displayName = 'sass';

const sassWatch = () => {
	gulp.watch(paths.watch, sassTask);
};
sassWatch.displayName = 'sass:watch';

exports.sassTask = sassTask;
exports.sassWatch = sassWatch;
