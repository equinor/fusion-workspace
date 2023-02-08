import { Workspace } from './lib';
export * from './lib';
import { WorkspaceViewController } from '@equinor/workspace-react';
import type { BaseEvent } from '@equinor/workspace-core';
export type { BaseEvent };
import ReactDOM from 'react-dom';
export { WorkspaceViewController };

import { WorkspaceVitePlugin } from './plugin';
export { WorkspaceVitePlugin };

export { Workspace };
export default Workspace;

import { createRoot } from 'react-dom/client';
