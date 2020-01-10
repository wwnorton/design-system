const del = require('del');

module.exports = (packageName, { destRoot }) => {
	const task = () => del([
		destRoot,
	]);
	task.displayName = `clean:${packageName}`;
	return task;
};
