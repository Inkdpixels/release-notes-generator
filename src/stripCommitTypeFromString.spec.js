import {expect} from 'chai';
import stripCommitTypeFromString from './stripCommitTypeFromString.js';

describe('The "stripCommitTypeFromString" function', () => {
	it('should return a string.', () => {
		expect(stripCommitTypeFromString('test')).to.be.a('string');
	});

	it('should remove, if found, the `!!! TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! TASK: My message')).to.equal('My message');
	});

	it('should remove, if found, the `!!! FEATURE: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! FEATURE: My message')).to.equal('My message');
	});

	it('should remove, if found, the `!!! SECURITY: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! SECURITY: My message')).to.equal('My message');
	});

	it('should remove, if found, the `!!! BUGFIX: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! BUGFIX: My message')).to.equal('My message');
	});

	it('should remove, if found, the `!!! TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('!!! TASK: My message')).to.equal('My message');
	});

	it('should remove, if found, the `TASK: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('TASK: My message')).to.equal('My message');
	});

	it('should remove, if found, the `FEATURE: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('FEATURE: My message')).to.equal('My message');
	});

	it('should remove, if found, the `SECURITY: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('SECURITY: My message')).to.equal('My message');
	});

	it('should remove, if found, the `BUGFIX: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('BUGFIX: My message')).to.equal('My message');
	});

	it('should remove, if found, the `DOCS: ` prefix of the string.', () => {
		expect(stripCommitTypeFromString('DOCS: My message')).to.equal('My message');
	});
});
