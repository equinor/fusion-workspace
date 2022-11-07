import { describe, it, expect } from '@jest/globals';
import { createObservableProxy } from '../createObservableProxy';
describe('', () => {
	it('should generate additional properties', () => {
		const org = { name: '1234', age: 18 };
		const proxy = createObservableProxy(org);
		expect(Object.keys(proxy).length).toStrictEqual(Object.keys(org).length * 2 + 1);
	});
});
