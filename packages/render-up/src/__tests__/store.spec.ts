import { describe, expect, jest, test } from '@jest/globals';
import { createStore } from '../utils/createStore';

const setup = () => ({ store: createStore(), key: 'abc' });

describe('component store', () => {
	test('Reverts to subscriber 1 when 2 is removed', () => {
		const { key, store } = setup();
		const firstNode = 1;

		const first = store.subscribeInlet(key);
		first.set(firstNode);

		const latest = store.subscribeInlet(key);
		latest.set(2);
		latest.unsubscribe();
		expect(firstNode).toStrictEqual(store.getOutlet(key));
	});

	test('Fallbacks to the latest component emitted ', () => {
		const { key, store } = setup();
		const firstNode = 1;

		const first = store.subscribeInlet(key);
		first.set(firstNode);

		const second = store.subscribeInlet(key);
		second.set(2);

		const latest = store.subscribeInlet(key);
		latest.set(3);
		/** Should remove component from revertmap or set it to first */
		second.unsubscribe();
		latest.unsubscribe();
		expect(firstNode).toStrictEqual(store.getOutlet(key));
	});

	test('Subscriber should be notified when inlet changes', () => {
		const { key, store } = setup();
		const mockFunction = jest.fn();

		store.subscribeOutlet({ key: key, signal: mockFunction });
		const { set } = store.subscribeInlet(key);
		set(1);
		set(2);
		/** Initial and 2x update */
		expect(mockFunction).toBeCalledTimes(3);
	});
});
