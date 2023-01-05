import { useEffect } from 'react';
import { ComponentNode } from '../types';
import { useNodeStore } from './useNodeStore';

/**
 * @param key - The key to store the component in.
 * @param getNode - The component to be stored
 * @param deps - The deps for updating the component
 */
export const useInlet = <TKey extends string = string>(key: TKey, getNode: () => ComponentNode, deps?: Array<any>) => {
	const store = useNodeStore();

	deps && deps.push(store);

	/**
	 * Subscription should happen outside the useeffect so the component doesnt re-subscribe every time deps changes
	 */
	useEffect(() => {
		const { set, unsubscribe: remove } = store.subscribeInlet(key);
		set(getNode());

		return () => remove();
	}, deps ?? [store]);
};
