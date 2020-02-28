const gulp = require('gulp');
const ts = require('gulp-typescript');
const header = require('gulp-header');

module.exports = (packageName, { banner, sourcemaps }, { dest, watch, tsConfig }) => {
	const tsProject = ts.createProject(tsConfig);

	const task = () => tsProject.src()
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
