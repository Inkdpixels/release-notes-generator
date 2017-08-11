const stripCommitTypeFromString = require('./stripCommitTypeFromString.js');

describe('stripCommitTypeFromString()', () => {
	it('should return a string.', () => {
		expect(typeof stripCommitTypeFromString('test')).toBe('string');
	});

	it('should remove, if found, the `!!! TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! TASK: My message')).toBe('My message');
	});

	it('should remove, if found, the `!!! FEATURE: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! FEATURE: My message')).toBe('My message');
	});

	it('should remove, if found, the `!!! SECURITY: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! SECURITY: My message')).toBe('My message');
	});

	it('should remove, if found, the `!!! BUGFIX: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! BUGFIX: My message')).toBe('My message');
	});

	it('should remove, if found, the `!!! TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! TASK: My message')).toBe('My message');
	});

	it('should remove, if found, the `TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('TASK: My message')).toBe('My message');
	});

	it('should remove, if found, the `FEATURE: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('FEATURE: My message')).toBe('My message');
	});

	it('should remove, if found, the `SECURITY: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('SECURITY: My message')).toBe('My message');
	});

	it('should remove, if found, the `BUGFIX: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('BUGFIX: My message')).toBe('My message');
	});

	it('should remove, if found, the `DOCS: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('DOCS: My message')).toBe('My message');
	});
});
