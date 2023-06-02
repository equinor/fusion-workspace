import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceSidesheets } from '../../../../types';
import { useState, useEffect, useCallback } from 'react';
import { createSidesheetEventKey, detailSidesheetEventKey, SidesheetSimple } from '../../sidesheet';
import { useQueryClient } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

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
  const [currEv, setCurrEv] = useState<WorkspaceSidesheets<TData> | null>(null);

  const queryClient = useQueryClient();

  const handleSetter = useCallback(
    (ev: WorkspaceSidesheets<TData> | null) => {
      if (isSelectionEvent(currEv) && !isSelectionEvent(ev)) {
        mediator.selectionService.selectedNodes = [];
      }
      setCurrEv(ev);
    },
    [currEv]
  );

  useEffect(() => {
    const sub = mediator.sidesheetService.subscribeAll((ev) => {
      if (([detailSidesheetEventKey, createSidesheetEventKey] as string[]).includes(ev.type)) {
        handleSetter(ev as WorkspaceSidesheets<any>);
      } else {
        warnRenderUndefined(ev.type);
      }
    });
    return () => sub();
  }, [handleSetter]);

  if (!currEv) return null;

  switch (currEv.type) {
    case 'create_sidesheet': {
      if (!config.CreateSidesheet) {
        warnRenderUndefined('create sidesheet');
        return null;
      }
      return <config.CreateSidesheet controller={{ close: () => handleSetter(null) }} />;
    }

    case 'details_sidesheet': {
      if (!config.DetailsSidesheet) {
        warnRenderUndefined('details sidesheet');
        return null;
      }
      return (
        <ErrorBoundary FallbackComponent={UnhandledSidesheetException} onError={() => handleSetter(null)}>
          <config.DetailsSidesheet
            id={currEv.props.id}
            item={currEv.props.item}
            controller={{
              close: () => handleSetter(null),
              invalidate: () => {
                // queryClient.invalidateQueries({ queryKey: queryKey });
              },
            }}
          />
        </ErrorBoundary>
      );
    }
  }
};
const key: WorkspaceSidesheets<any>['type'] = 'details_sidesheet';

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};

const isSelectionEvent = <T extends WorkspaceSidesheets<any>>(obj: WorkspaceSidesheets<any> | unknown): obj is T =>
  typeof obj === 'object' && obj?.['type'] === key;

const warnRenderUndefined = (name: string) =>
  console.warn(`Tried to render sidesheet of type: ${name} but no component was provided.`);
