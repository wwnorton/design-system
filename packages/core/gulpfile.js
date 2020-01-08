const { series, parallel } = require('gulp');
const { sassTask, sassWatch } = require('./tasks/sass');
const { tsTask, tsWatch } = require('./tasks/typescript');
const { clean } = require('./tasks/utilities');

// Grouped Task Definitions
const build = series(clean, parallel(sassTask, tsTask));
const watch = parallel(sassWatch, tsWatch);
const dev = series(build, watch);

// Individual tasks
exports.clean = clean;
exports.sass = sassTask;
exports.ts = tsTask;

// Grouped tasks
exports.build = build;
exports.watch = watch;
exports.dev = dev;

// Primary task
exports.default = build;
