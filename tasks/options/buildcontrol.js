module.exports = {
	buildcontrol: {
		options: {
			dir: 'dist',
			commit: true,
			push: true,
			connectCommits: false,
			message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
		},
		pages: {
			options: {
				remote: 'git@github.com:mistaslithas/ehr-ember.git',
				branch: 'gh-pages'
			}
		}
	}
};
