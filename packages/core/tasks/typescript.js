const gulp = require('gulp');
const ts = require('gulp-typescript');
const header = require('gulp-header');
const { banner, sourcemaps, typescript: paths } = require('./config');

const tsProject = ts.createProject('tsconfig.json');

const tsTask = () => gulp.src(paths.src, {
	sourcemaps,
	since: gulp.lastRun(tsTask),
})
	.pipe(tsProject())
	.pipe(
		header(banner),
	)
	.pipe(gulp.dest(paths.dest, {
		sourcemaps: sourcemaps && '.',
	}));
tsTask.displayName = 'ts';

const tsWatch = () => {
	gulp.watch(paths.watch, tsTask);
};
tsWatch.displayName = 'ts:watch';

exports.tsTask = tsTask;
exports.tsWatch = tsWatch;
