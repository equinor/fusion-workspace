import { NodeStore, ComponentNode, Subscription } from '../types';

export const createStore = (): NodeStore<string> => {
	const components = new Map<string, ComponentNode>();

	const subscribers: Subscription[] = [];

	const identityMap = new Map<string, number[]>();

	/** Stores the latest emitted component from all the subscribers using their unique id */
	const latestFrom = new Map<number, ComponentNode>();

	return {
		subscribeInlet: (key) => {
			const id = generateIdentity();
			//Snapshots latest component to ensure reverting is possible
			identityMap.set(key, [...(identityMap.get(key) ?? []), id]);

			return {
				set: (node: ComponentNode) => {
					/** Store on their unique ID */
					latestFrom.set(id, node);
					if (!validateLatestId(id, identityMap.get(key))) return;
					components.set(key, node);
					notify(key, subscribers);
				},
				unsubscribe: () => {
					/** Delete latestFrom either way */
					latestFrom.delete(id);
					if (!validateLatestId(id, identityMap.get(key))) {
						//remove from identity map
						const idArr = identityMap.get(key) ?? [];
						removeFromArray(idArr, idArr.indexOf(id));
						identityMap.set(key, idArr);
					} else {
						/** Pop subscriber */
						identityMap.set(key, popLatest(identityMap.get(key)));
						const ids = identityMap.get(key) ?? [];
						/** Fallback to latest value */
						components.set(key, latestFrom.get(ids[ids?.length - 1]));
						/** Notify subscribers that component was removed/replaced */
						notify(key, subscribers);
					}
				},
			};
		},
		subscribeOutlet: (sub) => {
			subscribers.push(sub);
			sub.signal();
			return () => removeFromArray(subscribers, subscribers.indexOf(sub));
		},
		getOutlet: (key) => components.get(key),
	};
};

/** Pops the last value from an array and returns the array */
const popLatest = (arr: unknown[] | undefined) =>
	Array.isArray(arr)
		? (() => {
				arr.pop();
				return arr;
		  })()
		: [];

/** Checks if the id provided matches the last value in the second argument */
const validateLatestId = (id: number, keys: number[] | undefined) => keys && keys[keys.length - 1] === id;

/** Notifies subscribers that a change has occurred */
const notify = (key: string, subscriptions: Subscription[]) => {
	subscriptions.filter((sub) => sub.key === key).forEach(({ signal }) => signal());
};

/** Removes an item from an array at a given index */
const removeFromArray = (list: any[], index: number) => {
	if (index === -1) return;
	list.splice(index, 1);
	return list;
};

/** Generates a unique id */
const generateIdentity = () => Math.random() * 16;
