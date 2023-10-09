import { Workspace } from '@equinor/workspace-fusion';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { GroupingOption } from '@equinor/workspace-garden';
import React from 'react';
import { createRoot } from 'react-dom/client';

export function App() {
  return (
    <Workspace<{ id: string }>
      workspaceOptions={{ getIdentifier: (a) => a.id }}
      gridOptions={{
        columnDefinitions: [{ field: 'id' }],
        getRows: async ({ success, request }, filter) => {
          success({ rowData: [{ id: '123' }, { id: '125' }, { id: '9342' }, { id: '1212' }], rowCount: 4 });
        },
        excelExport: async (filterState) =>
          new Promise((res, rej) =>
            setTimeout(() => {
              res();
              console.log('løøøøøøø');
            }, 2000)
          ),
      }}
      sidesheetOptions={{
        type: 'default',
        DetailsSidesheet: (a) => {
          return <div onClick={() => a.close()}>hello am sidesheet</div>;
        },
      }}
      gardenOptions={{
        getGardenMeta: async (a, b, c) => {
          console.log(a);
          return {
            allGroupingOptions: [
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
            ] as GroupingOption[],
            columnCount: 2,
            columnStart: 0,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
            columnWidth: 150,
          };
        },
        getBlockAsync: async (a) => {
          return [
            { columnName: 'Some name', items: [], subGroupCount: 0, subGroups: [], totalItemsCount: 0 },
            {
              columnName: 'some other name',
              items: [{ id: '123' }],
              subGroupCount: 0,
              subGroups: [],
              totalItemsCount: 1,
            },
          ];
        },
        getDisplayName: () => '',
        getHeader: async (a) => {
          return [
            { count: 0, name: 'Some name' },
            { count: 1, name: 'some other name' },
          ];
        },
        getSubgroupItems: () => {
          throw new Error('');
        },
        initialGrouping: ['RFOC'],
        initialDateVariant: 'Planned',
        initialTimeInterval: 'Weekly',
      }}
      filterOptions={{
        dataSource: {
          getFilterMeta: async () => [
            {
              filterItems: [
                { count: 10, value: 'test' },
                {
                  count: 9,
                  value: 'test2',
                },
              ],
              isQuickFilter: true,
              name: 'test',
            },
            {
              name: 'single',
              filterItems: [{ count: 1, value: 'abc' }],
              isQuickFilter: true,
            },
            {
              name: 'item1',
              filterItems: [{ count: 1, value: 'value1' }],
              isQuickFilter: true,
            },
            {
              name: 'item2',
              filterItems: [{ count: 1, value: 'value2' }],
              isQuickFilter: true,
            },
            {
              name: 'item3',
              filterItems: [{ count: 1, value: 'value3' }],
              isQuickFilter: true,
            },
            {
              name: 'item4',
              filterItems: [{ count: 1, value: 'value4' }],
              isQuickFilter: true,
            },
            {
              name: 'item5',
              filterItems: [{ count: 1, value: 'value5' }],
              isQuickFilter: true,
            },
            {
              name: 'item6',
              filterItems: [{ count: 1, value: 'value6' }],
              isQuickFilter: true,
            },
            {
              name: 'item7',
              filterItems: [{ count: 1, value: 'value7' }],
              isQuickFilter: true,
            },
            {
              name: 'item8',
              filterItems: [{ count: 1, value: 'value8' }],
              isQuickFilter: true,
            },
            {
              name: 'item9',
              filterItems: [{ count: 1, value: 'value9' }],
              isQuickFilter: true,
            },
            {
              name: 'item10',
              filterItems: [{ count: 1, value: 'value10' }],
              isQuickFilter: true,
            },
            {
              name: 'item11',
              filterItems: [{ count: 1, value: 'value11' }],
              isQuickFilter: true,
            },
            {
              name: 'item12',
              filterItems: [{ count: 1, value: 'value12' }],
              isQuickFilter: true,
            },
            {
              name: 'item13',
              filterItems: [{ count: 1, value: 'value13' }],
              isQuickFilter: true,
            },
            {
              name: 'item14',
              filterItems: [{ count: 1, value: 'value14' }],
              isQuickFilter: true,
            },
          ],
        },
      }}
      modules={[gridModule, gardenModule]}
    />
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
