const del = require('del');
const { destRoot } = require('./config');

const clean = () => del([
	destRoot,
]);

exports.clean = clean;
