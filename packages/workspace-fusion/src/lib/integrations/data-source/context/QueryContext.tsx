import { FusionMediator } from '../../../types';
import { ReactNode, createContext, useContext, useEffect } from 'react';
import { UseQueryOptions } from '@tanstack/react-query';
import { DataSourceConfig } from '../types';
import { prepareConfig } from '../utils/prepareConfig';

/** Rules of hooks, this provider must always be present regardless of configuration */
type DataSourceProviderProps = {
  children: ReactNode;
  config?: DataSourceConfig<Record<PropertyKey, unknown>>;
  appKey: string;
};
export const DataSourceProvider = ({ children, config, appKey }: DataSourceProviderProps) => {
  const query = prepareConfig(config, appKey);
  return <QueryContext.Provider value={query}>{children}</QueryContext.Provider>;
};

const QueryContext = createContext<UseQueryOptions | null>(null);

export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error('Query context called out of bounds');
  }
  return context;
};
