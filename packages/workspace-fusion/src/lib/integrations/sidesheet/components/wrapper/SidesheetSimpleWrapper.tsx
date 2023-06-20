import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator } from '../../../../types';
import { SidesheetSimple } from '../../sidesheet';
import { ErrorBoundary } from 'react-error-boundary';
import { useWorkspaceController } from '../../../../context/WorkspaceControllerContext';

type SidesheetSimpleWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
> = {
  mediator: FusionMediator<never, TContext, TCustomSidesheetEvents>;
  config: SidesheetSimple<TData>;
};

export const SidesheetSimpleWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>({
  config,
  mediator,
}: SidesheetSimpleWrapperProps<TData, TContext, TCustomSidesheetEvents>) => {
  const { selected, setSelected } = useWorkspaceController();

  return (
    <ErrorBoundary
      FallbackComponent={UnhandledSidesheetException}
      onError={() => console.error('An error occurred in the sidesheet')}
    >
      {selected && config.DetailsSidesheet && (
        <config.DetailsSidesheet
          id={selected.id}
          item={selected?.item as TData | undefined}
          controller={{
            close: () => setSelected(null),
            invalidate: () => {
              // queryClient.invalidateQueries({ queryKey: queryKey });
            },
          }}
        />
      )}
    </ErrorBoundary>
  );
};

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};
