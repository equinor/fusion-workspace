import { ReactFilterController, FilterContextProvider } from '@equinor/workspace-filter';
import { useQueryContext } from '../../../integrations/data-source';
import { useQuery } from 'react-query';
import { FusionMediator } from 'lib/types';
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
		useSyncFilterProvider(filterController as any);
		useEffect(useFilterControllerSync(filterController, mediator), [mediator]);
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
		if (data) {
			filterControlLer.setData(data as unknown[]);
			filterControlLer.init();
		}
	}, [data]);
}

function useFilterControllerSync(
	filterController: ReactFilterController<any>,
	mediator: FusionMediator<any, any, any>
) {
	return () => {
		const unsub = filterController.onFilteredDataChanged((newData) => {
			mediator.dataService.filteredData = newData;
		});
		mediator.dataService.data && filterController.setData(mediator.dataService.data);
		filterController.init();
		const sub = mediator.dataService.data$.subscribe((data) => {
			filterController.setData(data ?? []);
			filterController.init();
		});
		return () => {
			unsub();
			sub.unsubscribe();
		};
	};
}
