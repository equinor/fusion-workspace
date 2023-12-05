import { Provider } from '@equinor/workspace-react';
import { PropsWithChildren, createContext } from 'react';
import { StatusBarWrapper } from '../components/StatusBarWrapper';
import { StatusBarConfig } from '../types/';

export function addStatusBar(config: StatusBarConfig | undefined): Provider | undefined {
  if (!config) return;
  const StatusBarProvider = ({ children }: PropsWithChildren) => (
    <StatusBarContext.Provider value={() => <StatusBarWrapper config={config} />}>{children}</StatusBarContext.Provider>
  );
  return {
    Component: StatusBarProvider,
    name: 'Status bar',
  };
}
export const StatusBarContext = createContext<React.FC | undefined>(undefined);
