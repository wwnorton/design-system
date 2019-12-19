const { series, parallel } = require('gulp');
const { sassTask, sassWatch } = require('./tasks/sass');
const { jsTask, jsWatch } = require('./tasks/javascript');
const { clean } = require('./tasks/utilities');

// Grouped Task Definitions
const build = series(clean, parallel(sassTask, jsTask));
const watch = parallel(sassWatch, jsWatch);
const dev = series(build, watch);

// Individual tasks
exports.clean = clean;
exports.sass = sassTask;
exports.js = jsTask;

// Grouped tasks
exports.build = build;
exports.watch = watch;
exports.dev = dev;

// Primary task
exports.default = build;
