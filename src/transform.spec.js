import chai from 'chai';
import transform from './transform.js';

const {expect} = chai;

describe('The "transform function"', () => {
	it('should return a object.', done => {
		const result = transform({
			header: '',
			body: '',
			type: ''
		});

		expect(result).to.be.an('object');
		expect(result).to.have.property('header');
		expect(result).to.have.property('body');
		expect(result).to.have.property('type');

		done();
	});

	it('should modify the commit data if a [TASK] prefix was foud in the commit header.', done => {
		const result = transform({
			header: '[TASK] My commit header',
			body: '',
			type: ''
		});

		expect(result.header).to.equal('My commit header');
		expect(result.type).to.equal('Miscellaneous');

		done();
	});

	it('should modify the commit data if a [DOCS] prefix was foud in the commit header.', done => {
		const result = transform({
			header: '[DOCS] My commit header',
			body: '',
			type: ''
		});

		expect(result.header).to.equal('My commit header');
		expect(result.type).to.equal('Documentation');

		done();
	});

	it('should modify the commit data if a [BUGFIX] prefix was foud in the commit header.', done => {
		const result = transform({
			header: '[BUGFIX] My commit header',
			body: '',
			type: ''
		});

		expect(result.header).to.equal('My commit header');
		expect(result.type).to.equal('Bugfixes');

		done();
	});

	it('should modify the commit data if a [FEATURE] prefix was foud in the commit header.', done => {
		const result = transform({
			header: '[FEATURE] My commit header',
			body: '',
			type: ''
		});

		expect(result.header).to.equal('My commit header');
		expect(result.type).to.equal('Features');

		done();
	});

	it('should modify the commit data if a [!!!] prefix was foud in the commit header.', done => {
		const result = transform({
			header: '[!!!] My commit header',
			body: '',
			type: ''
		});

		expect(result.header).to.equal('My commit header');
		expect(result.type).to.equal('BREAKING CHANGES');

		done();
	});
});
