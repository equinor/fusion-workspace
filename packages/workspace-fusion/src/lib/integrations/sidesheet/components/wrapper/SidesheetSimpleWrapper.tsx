import { ErrorBoundary } from 'react-error-boundary';
import { DetailsSidesheetProps } from '../../types';
import { useWorkspace } from '../../../../hooks';

type SidesheetSimpleWrapperProps<TData extends Record<PropertyKey, unknown>> = {
  DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
};

export const SidesheetSimpleWrapper = <TData extends Record<PropertyKey, unknown>>({
  DetailsSidesheet,
}: SidesheetSimpleWrapperProps<TData>) => {
  const { selection, clearSelection } = useWorkspace();

  return (
    <ErrorBoundary
      FallbackComponent={UnhandledSidesheetException}
      onError={() => console.error('An error occurred in the sidesheet')}
    >
      {selection && (
        <DetailsSidesheet id={selection.id} item={selection?.item as TData | undefined} close={clearSelection} />
      )}
    </ErrorBoundary>
  );
};

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};
