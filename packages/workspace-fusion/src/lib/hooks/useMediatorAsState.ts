import { FusionMediator } from '../types';
import { useFilteredData } from './useFilteredData';

/** Hook for using the mediator with its values as reactive state */
export const useMediatorAsState = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never
>(
  mediator: FusionMediator<TData, TContext>
): FusionMediator<TData, TContext> => {
  const filteredData = useFilteredData(mediator);

  return Object.assign({}, mediator, { dataService: { ...mediator.dataService, filteredData } });
};
