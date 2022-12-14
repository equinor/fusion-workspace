import { StatusBarConfig } from './workspaceConfig';

export type WorkspaceStatusBarProps<TData extends Record<PropertyKey, unknown>> = {
	statusBarOptions?: StatusBarConfig<TData>;
};
