import { StatusBar } from '@equinor/workspace-status-bar';

import { FusionMediator, StatusBarConfig } from '../types';
import { useFilteredData } from '../hooks/useFilteredData';

type StatusBarWrapperProps<TData> = {
	config: StatusBarConfig<TData>;
	mediator: FusionMediator<TData>;
};
export function StatusBarWrapper<TData>({ config, mediator }: StatusBarWrapperProps<TData>) {
	const data = useFilteredData(mediator);

	return <StatusBar items={config(data ?? [])} />;
}
