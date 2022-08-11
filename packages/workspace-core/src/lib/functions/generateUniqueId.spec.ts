import { generateUniqueId } from './generateUniqueId';

describe('generateUniqueId', () => {
	const string = generateUniqueId();
	it('should generate string', () => {
		expect(typeof string).toBe('string');
	});
	it('should be less length 20', () => {
		const string = generateUniqueId();
		expect(string.length).toBeLessThan(20);
	});
});
