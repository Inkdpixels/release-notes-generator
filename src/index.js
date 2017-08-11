const concat = require('concat-stream');
const {StringDecoder} = require('string_decoder');
const parseGitHubUrl = require('github-url-from-git');
const changelog = require('conventional-changelog');
const transform = require('./transform.js');

module.exports = (pluginConfig, {pkg}, cb) => {
	const repository = pkg.repository ? parseGitHubUrl(pkg.repository.url) : null;

	function onStreamData(buffer) {
		const decoder = new StringDecoder('utf8');
		const log = decoder.write(buffer);

		cb(null, log);
	}

	changelog({
		repository,
		version: pkg.version,
		file: false
	}, null, null, null, {
		transform
	}).pipe(concat(onStreamData));
};
