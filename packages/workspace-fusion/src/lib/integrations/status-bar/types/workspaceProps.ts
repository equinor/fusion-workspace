import { StatusItem } from './workspaceConfig';

export type WorkspaceStatusBarProps<TFilter = undefined> = {
  statusBarOptions?: (filters: TFilter) => Promise<StatusItem[]>;
};
