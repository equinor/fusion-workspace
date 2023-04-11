import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search, drag_handle, chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense, useContext } from 'react';
import { FilterDataSource } from '../types';
import { FilterContext } from '../context/filterContext';
import { tokens } from '@equinor/eds-tokens';
import { ErrorBoundary } from 'react-error-boundary';

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
  const context = useContext(FilterContext);

  if (!context) {
    console.error('Wrap the <Filter /> component in the <FilterContextProvider />');
    return null;
  }

  return (
    <ErrorBoundary FallbackComponent={() => <div>Filter failed to load</div>}>
      <Suspense fallback={<FilterLoadingFallback />}>
        <QueryClientProvider client={client}>
          <QuickFilter dataSource={dataSource} />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

function FilterLoadingFallback() {
  return <div style={{ height: '48px', width: '100%', background: tokens.colors.ui.background__light.hex }} />;
}
