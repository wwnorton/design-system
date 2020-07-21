const { series, parallel } = require('gulp');
const packages = require('./tasks/config');
const sass = require('./tasks/sass');
const typescript = require('./tasks/typescript');
const clean = require('./tasks/utilities');

const core = {
	clean: clean('core', packages.core.options),
	sass: sass('core', packages.core.options, packages.core.sass),
	ts: typescript('core', packages.core.options, packages.core.typescript),
};

const react = {
	clean: clean('react', packages.react.options),
	ts: typescript('react', packages.react.options, packages.react.typescript),
};

// `@wwnds/core` tasks
const buildCore = series(core.clean, parallel(core.sass.task, core.ts.task));
buildCore.displayName = 'build:core';
module.exports.buildCore = buildCore;
const watchCore = parallel(core.sass.watch, core.ts.watch);
watchCore.displayName = 'watch:core';
module.exports.watchCore = watchCore;
const devCore = series(buildCore, watchCore);
devCore.displayName = 'dev:core';
module.exports.displayName = devCore;

// `@wwnds/react` tasks
const buildReact = series(react.clean, parallel(react.ts.task));
buildReact.displayName = 'build:react';
module.exports.buildReact = buildReact;
const watchReact = parallel(react.ts.watch);
watchReact.displayName = 'watch:react';
module.exports.watchReact = watchReact;
const devReact = series(buildReact, watchReact);
devReact.displayName = 'dev:react';
module.exports.devReact = devReact;

// combined tasks
const cleanTask = parallel(core.clean, react.clean);
exports.clean = cleanTask;
const sassTask = parallel(core.sass.task);
exports.sass = sassTask;
const tsTask = parallel(core.ts.task, react.ts.task);
exports.ts = tsTask;
const watch = parallel(core.sass.watch, core.ts.watch, react.ts.watch);
exports.watch = watch;

// chained tasks
const build = series(cleanTask, parallel(sassTask, tsTask));
exports.build = build;
const dev = series(build, watch);
exports.dev = dev;

// primary task (run with just `gulp`)
exports.default = build;
