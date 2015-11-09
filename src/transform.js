const sections = {
	'[TASK]': 'Miscellaneous',
	'[BUGFIX]': 'Bugfixes',
	'[FEATURE]': 'Features',
	'[DOCS]': 'Documentation',
	'[!!!]': 'BREAKING CHANGES'
};
const types = Object.keys(sections);

export default commit => {
	const header = commit.header;

	types.forEach(type => {
		if (header.indexOf(type) > -1) {
			commit.type = sections[type];
			commit.header = commit.header.replace(`${type} `, '');
		}
	});

	return commit;
};
