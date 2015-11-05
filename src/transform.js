const types = ['[TASK]', '[BUGFIX]', '[FEATURE]', '[DOCS]'];
const sections = {
	'[TASK]': 'Miscellaneous',
	'[BUGFIX]': 'Bugfixes',
	'[FEATURE]': 'Features',
	'[DOCS]': 'Documentation'
};

export default commit => {
	const header = commit.header;

	types.forEach(key => {
		if (header.indexOf(key) > -1) {
			commit.type = sections[key];
			commit.header = commit.header.replace(`${key} `, '');
		}
	});

	return commit;
};
