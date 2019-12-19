const gulp = require('gulp');
const { rollup } = require('rollup');

const rollupConfig = require('../rollup.config');
const { js } = require('./config');

const jsTask = () => Promise.all(rollupConfig.map(
	async ({ output, ...input }) => {
		const bundle = await rollup(input);
		const outputs = (Array.isArray(output)) ? output : [output];
		return Promise.all(outputs.map((outputOptions) => bundle.write(outputOptions)));
	},
));

jsTask.displayName = 'js';

const jsWatch = () => {
	gulp.watch(js.watch, jsTask);
};
jsWatch.displayName = 'js:watch';

exports.jsTask = jsTask;
exports.jsWatch = jsWatch;
