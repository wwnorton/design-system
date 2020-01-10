const gulp = require('gulp');
const ts = require('gulp-typescript');
const header = require('gulp-header');

module.exports = (packageName, {
	banner, production, sourcemaps,
}, {
	src, dest, watch, tsConfig,
}) => {
	const tsProject = ts.createProject(tsConfig);

	const task = () => gulp.src(src, {
		sourcemaps: !production,
		since: gulp.lastRun(task),
	})
		.pipe(
			tsProject(),
		)
		.pipe(
			header(banner),
		)
		.pipe(
			gulp.dest(dest, { sourcemaps: sourcemaps && '.' }),
		);
	task.displayName = `typescript:${packageName}`;

	const tsWatch = () => {
		gulp.watch(watch, task);
	};
	tsWatch.displayName = `${task.displayName}:watch`;

	return { task, watch: tsWatch };
};
