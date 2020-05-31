const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const header = require('gulp-header');

module.exports = (packageName, { banner, production, sourcemaps }, { dest, watch, tsConfig }) => {
	const tsProject = ts.createProject(tsConfig);

	const task = () => tsProject.src()
		.pipe(
			tsProject(),
		)
		.pipe(
			babel({
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
				],
				minified: production,
			}),
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
