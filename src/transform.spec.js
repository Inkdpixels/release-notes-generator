const transform = require('./transform.js');

describe('transform()', () => {
	it('should return a object.', () => {
		const result = transform({
			header: '',
			body: '',
			type: ''
		});

		expect(typeof result).toBe('object');
		expect(result.header).toBeDefined();
		expect(result.body).toBeDefined();
		expect(result.type).toBeDefined();
	});

	it('should modify the commit data if the `TASK:` prefix was found at the beginning of the commit header.', () => {
		const result = transform({
			header: 'TASK: My commit header',
			body: '',
			type: ''
		});

		expect(result.header).toBe('My commit header');
		expect(result.type).toBe('Miscellaneous');
	});

	it('should modify the commit data if the `DOCS:` prefix was found at the beginning of the commit header.', () => {
		const result = transform({
			header: 'DOCS: My commit header',
			body: '',
			type: ''
		});

		expect(result.header).toBe('My commit header');
		expect(result.type).toBe('Documentation');
	});

	it('should modify the commit data if the `BUGFIX:` prefix was found at the beginning of the commit header.', () => {
		const result = transform({
			header: 'BUGFIX: My commit header',
			body: '',
			type: ''
		});

		expect(result.header).toBe('My commit header');
		expect(result.type).toBe('Bugfixes');
	});

	it('should modify the commit data if the `FEATURE:` prefix was found at the beginning of the commit header.', () => {
		const result = transform({
			header: 'FEATURE: My commit header',
			body: '',
			type: ''
		});

		expect(result.header).toBe('My commit header');
		expect(result.type).toBe('Features');
	});

	it('should modify the commit data if the `!!!` prefix was found at the beginning of the commit header.', () => {
		const result = transform({
			header: '!!! TASK: My commit header',
			body: '',
			type: ''
		});

		expect(result.header).toBe('My commit header');
		expect(result.type).toBe('BREAKING CHANGES');
	});
});
