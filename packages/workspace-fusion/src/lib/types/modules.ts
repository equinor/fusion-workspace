import { Provider, Tab } from '@equinor/workspace-react';
import { WorkspaceProps } from './workspaceProps';
import { FusionMediator } from './fusionController';

export type FusionWorkspaceModule = {
  name: string;
  setup: ModuleSetup;
};

export type ModuleSetup = (
  props: WorkspaceProps<any, any, any>,
  mediator: FusionMediator<never, any, any>
) => { provider: Provider; tab: Tab<string> } | undefined;
