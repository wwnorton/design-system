const version = {
	allowBranch: 'master',
	conventionalCommits: true,
	registry: 'https://npm.wwnorton.com',
	signGitCommit: true,
	signGitTag: true,
};

module.exports = {
	packages: ['docs', 'packages/*'],
	npmClient: 'npm',
	command: {
		publish: {
			...version,
		},
		version,
	},
};
