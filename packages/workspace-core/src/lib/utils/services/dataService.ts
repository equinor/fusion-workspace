import { createObservableProxy } from '@equinor/workspace-observable-proxy';
import { ServiceCtor } from '../../types/serviceCtor';

export const createDataService = <TData>(destroy: ServiceCtor) => {
  const dataService = createObservableProxy<{ data: TData[] | undefined; filteredData: TData[] | undefined }>({
    data: undefined,
    filteredData: undefined,
  });

  destroy(() => dataService.completeAll());

  return dataService;
};
