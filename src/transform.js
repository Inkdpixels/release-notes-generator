const stripCommitTypeFromString = require('./stripCommitTypeFromString.js');
const {sections, commitTypes} = require('./types.js');

module.exports = commit => {
	const {header} = commit;

	//
	// Iterate over all section types and find the matching section type for the commit.
	// The result is based upon the commit header, which should start with one of the given keys of the sections object.
	//
	// We start with the TYPO3 guidelines and afterwards check the Neos guidelines, since they need a special transformation of the commit header.
	//
	commitTypes.forEach(type => {
		if (header.indexOf(type) === 0) {
			commit.type = sections[type];
			commit.header = stripCommitTypeFromString(header);
		}
	});

	return commit;
};
