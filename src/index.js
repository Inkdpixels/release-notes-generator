import concat from 'concat-stream';
import {StringDecoder} from 'string_decoder';
import parseGitHubUrl from 'github-url-from-git';
import changelog from 'conventional-changelog';
import transform from './transform.js';

export default (pluginConfig, {pkg}, cb) => {
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
