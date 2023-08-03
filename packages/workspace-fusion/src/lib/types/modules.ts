import { Provider, Tab } from '@equinor/workspace-react';
import { WorkspaceProps } from './workspaceProps';

export type FusionWorkspaceModule = {
  name: string;
  setup: ModuleSetup;
};

export type ModuleSetup = (props: WorkspaceProps<any, any>) => { provider: Provider; tab: Tab<string> } | undefined;
