type OnChangeCallback<T, K extends keyof T> = (ev: T[K]) => void;
type Callback<T, K extends keyof T> = {
	id: string;
	cb: OnChangeCallback<T, K>;
};

/**
 * Subscribe function, returns an unsubscribe
 * @param key - String property to subscribe to
 * @param cb - Callback function to invoke when property changes
 */
export type Subscribe<T extends object> = <K extends keyof T>(key: K, handler: (ev: T[K]) => void) => () => void;
/** Extends an object and adds a subscribe property */
export type DecoratedProxy<T extends object> = T & { subscribe: Subscribe<T> };

export function proxyDecorator<T extends object>(obj: T): DecoratedProxy<T> {
	const subMap = new Map<string, Callback<T, keyof T>[]>(Object.keys(obj).map((key) => [key, []]));
	return new Proxy(
		{
			...obj,
			subscribe: <K extends keyof T>(key: K, cb: OnChangeCallback<T, K>): (() => void) => {
				if (typeof key !== 'string') throw Error('Key is not of type string');
				const arr = subMap.get(key);
				if (!Array.isArray(arr)) {
					throw Error('Callback array not found');
				}
				const id = (Math.random() * 16).toString();
				subMap.set(key, [...arr, { cb: cb, id }] as Callback<T, keyof T>[]);

				return () => {
					subMap.set(key, subMap.get(key)?.filter((s) => s.id !== id) ?? []);
				};
			},
		},
		{
			set(prop, index, newVal) {
				if (index === 'subscribe') return false;
				/** Emits new value */

				if (typeof newVal !== 'function') {
					console.log(newVal);
					//Functions cant be cloned
					subMap.get(index as string)?.forEach(({ cb }) => cb(newVal));
				}
				// eslint-disable-next-line no-param-reassign
				prop[index as keyof T] = newVal;
				return true;
			},
		}
	);
}
