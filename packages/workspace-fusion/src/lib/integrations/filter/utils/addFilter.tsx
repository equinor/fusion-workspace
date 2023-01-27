import { BaseEvent } from '@equinor/workspace-core';
import { ReactFilterController } from '@equinor/workspace-filter';
import { Provider } from '@equinor/workspace-react';
import { useEffect } from 'react';
import { FilterConfig } from '..';
import { FusionMediator } from '../../../types';
import { makeFilterProvider } from './addFilterContext';

export function addFilter<
	TData extends Record<PropertyKey, unknown>,
	TError,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>(
	config: FilterConfig<TData> | undefined,
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>
): Provider {
	if (!config) {
		return {
			name: 'filter_bypass',
			Component: ({ children }) => {
				useEffect(() => {
					const sub = mediator.dataService.data$.subscribe((val) => {
						if (!val) return;
						mediator.dataService.filteredData = val;
					});
					return () => {
						sub.unsubscribe();
					};
				}, [mediator]);
				return <>{children}</>;
			},
		};
	}

	const filterController = new ReactFilterController<TData>();

	filterController.addGroups(config.filterGroups);

	return makeFilterProvider(filterController, mediator);
}
