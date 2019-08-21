const { series, parallel } = require('gulp');
const { sassTask, sassWatch } = require('./build/sass');
const { clean } = require('./build/utilities');

// Grouped Task Definitions
const build = series(clean, parallel(sassTask));
const watch = parallel(sassWatch);
const dev = series(build, watch);

// Individual tasks
exports.clean = clean;
exports.sass = sassTask;

// Grouped tasks
exports.build = build;
exports.watch = watch;
exports.dev = dev;

// Primary task
exports.default = build;
