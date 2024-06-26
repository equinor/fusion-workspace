import { Workspace } from '@equinor/workspace-fusion';
import { FilterState } from '@equinor/workspace-fusion/filter';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { StatusItem } from '@equinor/workspace-fusion/status-bar';
import { GroupingOption } from '@equinor/workspace-garden';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Equinor;
  }
`;

function getAllGroupingOptions(): GroupingOption[] {
  return [
    {
      groupingKey: 'RFOC',
      timeInterval: ['Daily', 'Weekly', 'Monthly'],
      dateVariant: ['Forecast', 'Planned'],
    },
    {
      groupingKey: 'RFCC',
      timeInterval: ['Daily', 'Weekly', 'Monthly'],
      dateVariant: ['Forecast', 'Planned'],
    },
    {
      groupingKey: 'Some very long keys',
      timeInterval: ['Daily', 'Weekly'],
      dateVariant: ['Forecast', 'Planned', 'Done'],
    },
    { groupingKey: 'System', timeInterval: null, dateVariant: null },
  ];
}
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGardenBlockData(num_columns: number = 2): any[] {
  const gardenData: any[] = [];

  for (let i = 0; i < num_columns; i++) {
    const columnName = String.fromCharCode(65 + i);
    const numItems = getRandomInt(2, 30);
    const items = Array.from({ length: numItems }, () => {
      return { id: `${columnName}-${getRandomInt(100, 999)}` };
    });

    gardenData.push({
      columnName: columnName,
      items: items,
      subGroupCount: 0,
      subGroups: [],
      totalItemsCount: numItems,
    });
  }

  return gardenData;
}

function getGardenHeaderData(gardenData: any[] | null = null): any[] {
  if (gardenData === null) {
    gardenData = getGardenBlockData(5);
  }

  return gardenData.map((column) => {
    return { count: column.totalItemsCount, name: column.columnName };
  });
}

function getGridRowData(num_rows: number = 4): any[] {
  return Array.from({ length: num_rows }, () => {
    return { id: `${getRandomInt(100, 9999)}` };
  });
}

function getFilterMetaData(num_filters: number = 2): any[] {
  const filterData: any[] = [];

  for (let i = 0; i < num_filters; i++) {
    const filterName = String.fromCharCode(65 + i);
    const numItems = getRandomInt(1, 20);
    const items = Array.from({ length: numItems }, () => {
      return { count: getRandomInt(10, 40), value: `${filterName}-${getRandomInt(1, 999)}` };
    });

    filterData.push({
      filterItems: items,
      isQuickFilter: true,
      name: `system 2 Filter ${filterName}`,
    });
  }

  return filterData;
}

function getKPIData(num_kpis = 5) {
  const kpiData: { title: string; value: number }[] = [];

  for (let i = 0; i < num_kpis; i++) {
    const kpiNameLen = getRandomInt(1, 15);
    const kpiName = `KPI TITLE ${String.fromCharCode(65 + i).repeat(kpiNameLen)}`;
    const kpiValue = getRandomInt(1, 100000);
    kpiData.push({
      title: kpiName,
      value: kpiValue,
    });
  }

  return kpiData;
}

let GARDEN_SIZE = 30;
let GRID_SIZE = 150;
let FILTER_SIZE = 10;
let KPI_SIZE = 10;
const GardenBlockData = getGardenBlockData(GARDEN_SIZE);

export function App() {
  return (
    <Workspace<{ id: string }>
      workspaceOptions={{ getIdentifier: (a) => a.id }}
      onBookmarkChange={(ref) => {
        console.log('Listener updated ', ref);
      }}
      gridOptions={{
        columnDefinitions: [{ field: 'id' }],
        getRows: async ({ success, request }, filter) => {
          success({ rowData: getGridRowData(GRID_SIZE), rowCount: GRID_SIZE });
        },
        excelExport: async (filterState) =>
          new Promise((res, rej) =>
            setTimeout(() => {
              res(undefined);
            }, 2000)
          ),
      }}
      sidesheetOptions={{
        type: 'default',
        DetailsSidesheet: (a) => {
          return (
            <div onClick={() => a.close()}>
              <div>hello am sidesheet</div>
              <pre>{JSON.stringify(a, null, 4)}</pre>
            </div>
          );
        },
        CreateSidesheet: (props) => <div onClick={() => props.close()}>hello test</div>,
      }}
      gardenOptions={{
        getGardenMeta: async (a, b, c) => {
          console.log(a);
          return {
            allGroupingOptions: getAllGroupingOptions(),
            columnCount: GARDEN_SIZE,
            columnStart: 0,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
            columnWidth: 150,
          };
        },
        getBlockAsync: async (a) => GardenBlockData,
        getDisplayName: (a) => a.id,
        getHeader: async (a) => getGardenHeaderData(GardenBlockData),
        getSubgroupItems: () => {
          throw new Error('');
        },
        initialGrouping: ['RFOC'],
        initialDateVariant: 'Planned',
        initialTimeInterval: 'Weekly',
      }}
      filterOptions={{
        dataSource: {
          getFilterMeta: async (props) => {
            console.log(props);
            return getFilterMetaData(FILTER_SIZE);
          },
        },
      }}
      currentBookmark={{
        tab: 'garden',
        payload: {
          garden: {
            groupingKeys: ['RFOC'],
            dateVariant: 'Forecast',
            timeInterval: 'Weekly',
          },
          filter: { state: { search: '123', groups: [{ name: 'Filter A', values: ['A-314'] }] } },
        },
      }}
      statusBarOptions={async (filters: FilterState, signal?: AbortSignal | undefined): Promise<StatusItem[]> => {
        return getKPIData(KPI_SIZE);
      }}
      modules={[gridModule, gardenModule]}
    />
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
