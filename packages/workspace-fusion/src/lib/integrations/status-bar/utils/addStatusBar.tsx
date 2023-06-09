import { Provider } from '@equinor/workspace-react';
import { createContext } from 'react';
import { StatusBarWrapper } from '../components/StatusBarWrapper';
import { StatusBarConfig } from '../types/';
import { BaseEvent } from '@equinor/workspace-core';

export function addStatusBar<
  TData extends Record<PropertyKey, unknown>,
  TError,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
>(config: StatusBarConfig | undefined): Provider | undefined {
  if (!config) return;
  const StatusBarProvider = ({ children }) => (
    <StatusBarContext.Provider value={() => <StatusBarWrapper config={config} />}>{children}</StatusBarContext.Provider>
  );
  return {
    Component: StatusBarProvider,
    name: 'Status bar',
  };
}
export const StatusBarContext = createContext<React.FC | undefined>(undefined);
