import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceSidesheets } from '../../../../types';
import { IsNeverType } from '../../../../types/typescriptUtils/isNeverType';
import { useState, useEffect, useCallback } from 'react';
import { SidesheetAdvanced } from '../../sidesheet';

import { useQueryClient } from '@tanstack/react-query';

type SidesheetAdvancedWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
> = {
  mediator: FusionMediator<never, TContext, TCustomSidesheetEvents>;
  config: SidesheetAdvanced<TData, TContext, TCustomSidesheetEvents>;
};

export const SidesheetAdvancedWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
>({
  config,
  mediator,
}: SidesheetAdvancedWrapperProps<TData, TContext, TCustomSidesheetEvents>) => {
  const [currEv, setCurrEv] = useState<IsNeverType<
    TCustomSidesheetEvents,
    WorkspaceSidesheets<TData>,
    TCustomSidesheetEvents | WorkspaceSidesheets<TData>
  > | null>(null);

  const queryClient = useQueryClient();

  const handleSetter = useCallback(
    (
      ev: IsNeverType<
        TCustomSidesheetEvents,
        WorkspaceSidesheets<TData>,
        TCustomSidesheetEvents | WorkspaceSidesheets<TData>
      > | null
    ) => {
      if (isSelectionEvent(currEv) && !isSelectionEvent(ev)) {
        mediator.selectionService.selectedNodes = [];
      }
      setCurrEv(ev);
    },
    [currEv]
  );

  useEffect(() => {
    const sub = mediator.sidesheetService.subscribeAll(handleSetter);
    return () => sub();
  }, [handleSetter]);

  if (!currEv || !config.Sidesheet) return null;

  return (
    <config.Sidesheet
      ev={currEv}
      controller={{
        close: () => handleSetter(null),
        invalidate: () => {
          // queryClient.invalidateQueries({ queryKey: queryKey });
        },
      }}
    />
  );
};
const key: WorkspaceSidesheets<any>['type'] = 'details_sidesheet';

const isSelectionEvent = <T extends WorkspaceSidesheets<any>>(obj: WorkspaceSidesheets<any> | unknown): obj is T =>
  typeof obj === 'object' && obj?.['type'] === key;
