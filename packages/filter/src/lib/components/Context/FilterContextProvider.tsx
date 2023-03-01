import { ReactNode } from 'react';
import { ReactFilterController } from '../../classes/reactFilterController';
import { FilterContext } from '../../hooks';

interface FilterContextProviderProps<TData> {
  controller: ReactFilterController<TData>;
  children: ReactNode;
}

export function FilterContextProvider<TData>({ controller, children }: FilterContextProviderProps<TData>) {
  return (
    <FilterContext.Provider value={controller as ReactFilterController<unknown>}>{children}</FilterContext.Provider>
  );
}
