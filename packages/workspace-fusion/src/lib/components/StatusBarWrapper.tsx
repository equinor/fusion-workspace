import { StatusBar } from '@equinor/status-bar';

import { FusionMediator, StatusBarConfig } from '../types';
import { useFilteredData } from '../hooks/useFilteredData';

interface StatusBarWrapperProps<TData, TError> {
	config: StatusBarConfig<TData>;
	mediator: FusionMediator<TData, TError>;
}
export function StatusBarWrapper<TData, TError>({ config, mediator }: StatusBarWrapperProps<TData, TError>) {
	const data = useFilteredData(mediator);

	return <StatusBar items={config(data)} />;
}
