import { StatusBar } from '@equinor/workspace-status-bar';

import { FusionMediator } from '../types';
import { StatusBarConfig } from '../integrations/status-bar';
import { useFilteredData } from '../hooks/useFilteredData';

type StatusBarWrapperProps<TData extends Record<PropertyKey, unknown>> = {
	config: StatusBarConfig<TData>;
	mediator: FusionMediator<TData>;
};
export function StatusBarWrapper<TData extends Record<PropertyKey, unknown>>({
	config,
	mediator,
}: StatusBarWrapperProps<TData>) {
	const data = useFilteredData(mediator);

	return <StatusBar items={config(data)} />;
}
