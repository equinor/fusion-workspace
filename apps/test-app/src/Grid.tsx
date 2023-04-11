import { IServerSideGetRowsParams, IServerSideGetRowsRequest } from '@equinor/workspace-ag-grid';
import { FilterStateGroup } from '@equinor/workspace-filter';
import { GridConfig } from '@equinor/workspace-fusion/grid';
import { makeRequest } from './ignore';

const getRows = async (params: IServerSideGetRowsParams<any>, filters: FilterStateGroup[]) => {
  const { success, request, fail } = params;

  const res = await getRequest(request, filters).catch(fail);
  success({ rowData: res.items });
};

const getRequest = async (request: IServerSideGetRowsRequest, filters: FilterStateGroup[]) => {
  const body = {
    startRow: request.startRow,
    endRow: request.endRow,
    filter: filters,
  };
  const res = await makeRequest('work-orders/grid', body);

  return res.json();
};

export const gridConfig: GridConfig<any, FilterStateGroup[]> = {
  columnDefinitions: [{ field: 'workOrderNumber' }, { field: 'jobStatus' }, { field: 'materialStatus' }],
  getRows,
  gridOptions: {
    rowHeight: 100,
  },
};
