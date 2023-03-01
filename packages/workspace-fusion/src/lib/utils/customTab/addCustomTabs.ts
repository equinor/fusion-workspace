import { BaseEvent } from '@equinor/workspace-core';
import { Tab } from '@equinor/workspace-react';
import { CustomTab, FusionMediator } from '../../types';
import { addCustomTab } from './addCustomTab';

export function addCustomTabs<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  customTabs: CustomTab[] | undefined,
  mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): Tab<string>[] {
  if (!customTabs) return [];
  return customTabs.map((tab) => addCustomTab(tab, mediator));
}
