import { useObservable } from '@equinor/workspace-observable-proxy';
import { FusionMediator } from '../types/fusionController';

export const useFilteredData = <TData>({ dataService }: FusionMediator<TData>) =>
	useObservable(dataService.filteredData$, dataService.filteredData);
