import { Provider } from '@equinor/workspace-react';
import { createContext } from 'react';
import { StatusBarWrapper } from '../components/StatusBarWrapper';
import { FusionMediator } from '../../../types';
import { StatusBarConfig } from '../types/';
import { BaseEvent } from '@equinor/workspace-core';

export function addStatusBar<
  TData extends Record<PropertyKey, unknown>,
  TError,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(
  config: StatusBarConfig<TData> | undefined,
  mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): Provider | undefined {
  if (!config) return;
  const StatusBarProvider = ({ children }) => (
    <StatusBarContext.Provider value={() => <StatusBarWrapper config={config} mediator={mediator} />}>
      {children}
    </StatusBarContext.Provider>
  );
  return {
    Component: StatusBarProvider,
    name: 'Status bar',
  };
}
export const StatusBarContext = createContext<React.FC | undefined>(undefined);
