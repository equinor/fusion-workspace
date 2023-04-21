import { StatusItem } from './workspaceConfig';

export type WorkspaceStatusBarProps<TFilter = undefined> = {
  statusBarOptions?: (filters: TFilter, signal?: AbortSignal) => Promise<StatusItem[]>;
};
