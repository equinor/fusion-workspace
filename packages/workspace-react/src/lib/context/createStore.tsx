import { createContext, PropsWithChildren } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

export const createContextStore = <T,>(
	init: (set: (partial: Partial<T>, replace?: boolean) => void, getState: () => T, state: StoreApi<T>) => T
) => {
	const store = createStore<T>(init);
	// const ReactContext = createContext(store);

	return {
		// Provider: ({ children }: PropsWithChildren) => (
		// 	<ReactContext.Provider value={store}>{children}</ReactContext.Provider>
		// ),
		store,
		useStore: <U extends any = T>(selector?: (state: T) => U): U => {
			if (selector) {
				return useStore(store, selector);
			}
			return useStore(store) as unknown as U;
		},
	};
};
