import { StatusBar } from '@equinor/workspace-status-bar';

import { FusionMediator } from '../../../types';
import { StatusBarConfig } from '..';
import { useFilteredData } from '../../../hooks/useFilteredData';

type StatusBarWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	config: StatusBarConfig<TData>;
	mediator: FusionMediator<TData, TContext>;
};
export function StatusBarWrapper<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ config, mediator }: StatusBarWrapperProps<TData, TContext>) {
	const data = useFilteredData(mediator);
	/** Return div to ensure item positioning doesnt jump when data is set */
	if (!data) return <div id="status_bar"></div>;

	return <StatusBar items={config(data)} />;
}
