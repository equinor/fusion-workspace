import { ErrorBoundary } from 'react-error-boundary';
import { DetailsSidesheetProps } from '../../types';
import { useWorkspaceController } from '../../../../hooks';

type SidesheetSimpleWrapperProps<TData extends Record<PropertyKey, unknown>> = {
  DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
};

export const SidesheetSimpleWrapper = <TData extends Record<PropertyKey, unknown>>({
  DetailsSidesheet,
}: SidesheetSimpleWrapperProps<TData>) => {
  const { selected, setSelected } = useWorkspaceController();

  return (
    <ErrorBoundary
      FallbackComponent={UnhandledSidesheetException}
      onError={() => console.error('An error occurred in the sidesheet')}
    >
      {selected && (
        <DetailsSidesheet id={selected.id} item={selected?.item as TData | undefined} close={() => setSelected(null)} />
      )}
    </ErrorBoundary>
  );
};

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};
