import { StatusBar } from '@equinor/status-bar';

import { FusionMediator, StatusBarConfig } from '../types';
import { useFilteredData } from '../hooks/useFilteredData';

interface StatusBarWrapperProps<TData, TError> {
	config: StatusBarConfig<TData>;
	controller: FusionMediator<TData, TError>;
}
export function StatusBarWrapper<TData, TError>({ config, controller }: StatusBarWrapperProps<TData, TError>) {
	const data = useFilteredData(controller);

	return <StatusBar items={config.map(({ getValue }) => getValue(data))} />;
}
