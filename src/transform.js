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

	types.forEach(key => {
		if (header.indexOf(key) > -1) {
			commit.type = sections[key];
			commit.header = commit.header.replace(`${key} `, '');
		}
	});

	return commit;
};
