import { StatusBar } from '@equinor/status-bar';

import { FusionWorkspaceController, StatusBarConfig } from '../types';
import { useFilteredData } from '../hooks/useFilteredData';

interface StatusBarWrapperProps<TData, TError, TContext> {
	config: StatusBarConfig<TData>;
	controller: FusionWorkspaceController<TData, TError, TContext>;
}
export function StatusBarWrapper<TData, TError, TContext>({
	config,
	controller,
}: StatusBarWrapperProps<TData, TError, TContext>) {
	const data = useFilteredData(controller);

	return <StatusBar items={config.map(({ getValue }) => getValue(data))} />;
}
