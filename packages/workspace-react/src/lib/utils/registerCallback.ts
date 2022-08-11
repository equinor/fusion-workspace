import { Callback, OnCallbackSet } from '../types';
import { generateUniqueId } from './generateUniqueId';

export function registerCallback<TCallback>(
	list: Callback<TCallback>[],
	cb: TCallback,
	unsub: (id: string) => void
): OnCallbackSet {
	const id = generateUniqueId();
	list.push({ callback: cb, id });
	return {
		id,
		unsubscribe: () => unsub(id),
	};
}
