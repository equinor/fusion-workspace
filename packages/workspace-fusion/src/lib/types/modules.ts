import { Provider, Tab } from '@equinor/workspace-react';
import { FusionMediator } from './fusionController';
import { WorkspaceProps } from './workspaceProps';

export type FusionWorkspaceModule = {
  name: string;
  setup: ModuleSetup;
};

export type ModuleSetup = (
  props: WorkspaceProps<any, any, any>
) => { provider: Provider; tab: Tab<string> } | undefined;
