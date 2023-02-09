import { ReactFilterController, FilterContextProvider } from '@equinor/workspace-filter';
import { useQueryContext } from '../../../integrations/data-source';
import { useQuery } from '@tanstack/react-query';
import { FusionMediator } from '../../../types';
import { useEffect } from 'react';

export const FUSION_FILTER_PROVIDER_NAME = 'filter';

/**
 * Wraps workspace in filter context
 */
export function makeFilterProvider<TData, TError>(
	filterController: ReactFilterController<TData>,
	mediator: FusionMediator<any, any, any>
) {
	const FilterProvider = ({ children }) => {
		useEffect(filterControllerSyncEffect(filterController, mediator), [mediator]);
		useSyncFilterProvider(filterController as any);
		return <FilterContextProvider controller={filterController}>{children}</FilterContextProvider>;
	};
	return {
		Component: FilterProvider,
		name: FUSION_FILTER_PROVIDER_NAME,
	};
}

function useSyncFilterProvider(filterControlLer: ReactFilterController<unknown>) {
	const ctx = useQueryContext();

	const { data } = useQuery({
		...ctx,
		useErrorBoundary: false,
		suspense: false,
	});

	useEffect(() => {
		console.log('new data', data);

		if (data) {
			console.log('making new filters', data);
			filterControlLer.setData(data as unknown[]);
			filterControlLer.init();
		}
	}, [data]);
}

function filterControllerSyncEffect(
	filterController: ReactFilterController<any>,
	mediator: FusionMediator<any, any, any>
) {
	return () => {
		const unsub = filterController.onFilteredDataChanged((newData) => {
			mediator.dataService.filteredData = newData;
		});
		return () => {
			unsub();
		};
	};
}
