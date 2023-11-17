import { QuickFilter } from './quickFilter/QuickFilter';
import { playlist_add, search, drag_handle, chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense, createContext, useContext, useRef } from 'react';
import { FilterDataSource } from '../types';
import { FilterContext } from '../context/filterContext';
import { tokens } from '@equinor/eds-tokens';
import { ErrorBoundary } from 'react-error-boundary';
import { FilterStyles } from '../types/filterStyles';
import { Skeleton } from './skeleton/Skeleton';

Icon.add({ playlist_add, search, drag_handle, chevron_down, chevron_up });
/**
 * CC filter used in workspace
 * Requires being wrapped in FilterContextProvider
 */

export function Filter() {
  const context = useContext(FilterContext);

  if (!context) {
    console.error('Wrap the <Filter /> component in the <FilterContextProvider />');
    return null;
  }

  return (
    <ErrorBoundary FallbackComponent={() => <div>Filter failed to load</div>}>
      <Suspense fallback={<FilterLoadingFallback />}>
        <QuickFilter />
      </Suspense>
    </ErrorBoundary>
  );
}

export function FilterLoadingFallback() {
  return (
    <div
      style={{
        height: '48px',
        width: '100%',
        background: tokens.colors.ui.background__light.hex,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <Skeleton height={25} width={100} />
      <Skeleton height={25} width={100} />
      <Skeleton height={25} width={100} />
      <Skeleton style={{ marginRight: '1em' }} height={25} width={100} />
    </div>
  );
}

export const FilterStylesContext = createContext<undefined | FilterStyles>(undefined);
