import { BaseEvent } from '@equinor/workspace-core';
import { CustomTabComponent, FusionMediator } from '../types';
import { MediatorProvider } from './provider/MediatorProvider';

interface CustomTabWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
> {
  mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
  Component: CustomTabComponent;
}

export function CustomTabWrapper<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>({ Component, mediator }: CustomTabWrapperProps<TData, TContext, TCustomSidesheetEvents>) {
  return (
    <div>
      <MediatorProvider mediator={mediator}>
        <Component />
      </MediatorProvider>
    </div>
  );
}
