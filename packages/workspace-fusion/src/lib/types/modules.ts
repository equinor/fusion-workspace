import { WorkspaceViewController } from '@equinor/workspace-react';
import { FusionMediator } from './fusionController';

export type FusionWorkspaceModule<TData extends Record<PropertyKey, unknown>> = {
  name: string;
  setup: (
    mediator: FusionMediator<TData, any, any>,
    appKey: string,
    viewController: WorkspaceViewController<any, any>
  ) => void;
};
