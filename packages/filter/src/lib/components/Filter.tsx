import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search, drag_handle, chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense, useContext } from 'react';
import { FilterDataSource } from '../types';
import { FilterContext } from '../context/filterContext';
Icon.add({ playlist_add, search, drag_handle, chevron_down, chevron_up });
/**
 * CC filter used in workspace
 * Requires being wrapped in FilterContextProvider
 */

type FilterProps = {
  dataSource: FilterDataSource;
};

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });
export function Filter({ dataSource }: FilterProps) {
  const r = useContext(FilterContext);

  if (!r) {
    console.error('Wrap the <Filter /> component in the <FilterContextProvider />');
    return null;
  }

  return (
    <>
      <Suspense fallback={<div>Loading filter...</div>}>
        <QueryClientProvider client={client}>
          <QuickFilter dataSource={dataSource} />
        </QueryClientProvider>
      </Suspense>
    </>
  );
}
