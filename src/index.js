import parseGitHubUrl from 'github-url-from-git';
import changelog from 'conventional-changelog';
import transform from './transform.js';

export default (pluginConfig, {pkg}, cb) => {
	const repository = pkg.repository ? parseGitHubUrl(pkg.repository.url) : null;

	changelog({
		repository,
		version: pkg.version,
		file: false
	}, cb, null, null, {
		transform
	});
};
