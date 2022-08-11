import { StatusBar } from '@equinor/status-bar';
import { WorkspaceController } from '@workspace/workspace-core';

import { StatusBarConfig, WorkspaceControllers, WorkspaceOnClick } from '../types';
import { useFilteredData } from '../hooks/useFilteredData';

interface StatusBarWrapperProps<TData, TError, TContext> {
	config: StatusBarConfig<TData>;
	controller: WorkspaceController<TData, WorkspaceControllers<TData>, WorkspaceOnClick<TData>, TError, TContext>;
}
export function StatusBarWrapper<TData, TError, TContext>({
	config,
	controller,
}: StatusBarWrapperProps<TData, TError, TContext>) {
	const data = useFilteredData(controller);

	return <StatusBar items={config.map(({ getValue }) => getValue(data))} />;
}
