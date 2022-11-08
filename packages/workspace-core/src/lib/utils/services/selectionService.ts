import { createObservableProxy } from '@equinor/workspace-observable-proxy';

export const createSelectionService = () => createObservableProxy<{ selectedNodes: string[] }>({ selectedNodes: [] });
