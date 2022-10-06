import { createObservableProxy } from '../createObservableProxy';

describe('Testing observable proxy', () => {
	it('Should create the expected properties', () => {
		const proxy = createObservableProxy({ name: 'age' });
		// {name, name$, completeAll()}
		expect(Object.keys(proxy).length).toStrictEqual(3);
	});

	it('Should emit values when setting properties', () => {
		const proxy = createObservableProxy({ name: '' });
		const mockFunction = jest.fn();
		proxy.name$.subscribe(mockFunction);
		proxy.name = 'John';
		/** Behaviour subjects always emit the initial value instantly */
		expect(mockFunction).toBeCalledTimes(2);
	});

	it('Should not emit duplicates if comparator is supplied', () => {
		const TEST_NAME = 'James';
		const proxy = createObservableProxy({ name: TEST_NAME }, (prop, index, newVal) => prop[index] === newVal);
		const mockFunction = jest.fn();
		proxy.name$.subscribe(mockFunction);
		proxy.name = TEST_NAME;
		/**Will always be called once due to behaviour subjects nature */
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should not emit values if all subjects are closed', () => {
		const proxy = createObservableProxy({ name: '' });
		const mockFunction = jest.fn();
		proxy.name$.subscribe(mockFunction);
		proxy.completeAll();
		proxy.name = '123';
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should not create observable properties for functions', () => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		const proxy = createObservableProxy({ cb: () => {} });
		// {cb, completeAll}
		expect(Object.keys(proxy).length).toStrictEqual(2);
	});
});
