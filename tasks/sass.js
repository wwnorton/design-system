const fiber = require('fibers');
const gulp = require('gulp');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const sass = require('gulp-sass');

sass.compiler = require('sass');

module.exports = (packageName, {
	banner, production, sourcemaps,
}, {
	src, dest, watch,
}) => {
	const task = () => gulp.src(src, {
		sourcemaps,
		since: gulp.lastRun(task),
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
			header(banner),
		)
		.pipe(
			gulp.dest(dest, { sourcemaps: sourcemaps && '.' }),
		);
	task.displayName = `sass:${packageName}`;

	const watchTask = () => {
		gulp.watch(watch, task);
	};
	watchTask.displayName = `${task.displayName}:watch`;

	return { task, watch: watchTask };
};
