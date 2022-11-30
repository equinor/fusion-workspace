import { StatusBarConfig } from '../status-bar';

export type WorkspaceStatusBarProps<TData extends Record<PropertyKey, unknown>> = {
	statusBarOptions?: StatusBarConfig<TData>;
};
