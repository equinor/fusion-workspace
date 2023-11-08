import { ErrorBoundary } from 'react-error-boundary';
import { CreateSidesheetProps, DetailsSidesheetProps } from '../../types';
import { useWorkspace } from '../../../../hooks';
import { Suspense } from 'react';
import { CircularProgress } from '@equinor/eds-core-react';

type SidesheetSimpleWrapperProps<TData extends Record<PropertyKey, unknown>> = {
  DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
  CreateSidesheet?: (props: CreateSidesheetProps<TData>) => JSX.Element;
};

export const SidesheetSimpleWrapper = <TData extends Record<PropertyKey, unknown>>({
  DetailsSidesheet,
  CreateSidesheet,
}: SidesheetSimpleWrapperProps<TData>) => {
  const { selection, clearSelection, isCreateSidesheetOpen, closeCreateSidesheet } = useWorkspace();

  return (
    <ErrorBoundary
      FallbackComponent={UnhandledSidesheetException}
      onError={() => console.error('An error occurred in the sidesheet')}
    >
      <Suspense fallback={<SidesheetFallback />}>
        {selection ? (
          <DetailsSidesheet id={selection.id} item={selection?.item as TData | undefined} close={clearSelection} />
        ) : isCreateSidesheetOpen ? (
          <>{CreateSidesheet && <CreateSidesheet close={closeCreateSidesheet} />}</>
        ) : (
          <></>
        )}
      </Suspense>
    </ErrorBoundary>
  );
};

const SidesheetFallback = () => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <CircularProgress size={48} />
  </div>
);

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};
