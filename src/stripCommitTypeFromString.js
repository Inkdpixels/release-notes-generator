/**
 * Removes the commit type and the frontmost colon from the given string.
 *
 * @param  {String} string The string to replace
 * @return {String} The mutated string.
 */
function stripCommitTypeFromString(string) {
	return string.replace(/^(!!! TASK|!!! FEATURE|!!! SECURITY|!!! BUGFIX|!!! TASK|TASK|FEATURE|SECURITY|BUGFIX|DOCS): /, '');
}

module.exports = stripCommitTypeFromString;
