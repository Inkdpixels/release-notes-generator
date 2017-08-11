//
// Collection of all available sections which could show up in a changelog.
// The section is determined by the key which should be the beginning of the
// target commits header message.
//
const sections = {
	'!!!': 'BREAKING CHANGES',
	FEATURE: 'Features',
	SECURITY: 'Security',
	BUGFIX: 'Bugfixes',
	TASK: 'Miscellaneous',
	DOCS: 'Documentation'
};

//
// Array of commit types which this plugin allows.
//
const commitTypes = Object.keys(sections);

module.exports = {
	sections,
	commitTypes
};
