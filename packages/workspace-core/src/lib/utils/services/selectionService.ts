import { createObservableProxy } from '@equinor/observable-proxy';

export const createSelectionService = () => createObservableProxy<{ selectedNodes: string[] }>({ selectedNodes: [] });
