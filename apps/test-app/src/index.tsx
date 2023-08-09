import React from 'react';
import { createRoot } from 'react-dom/client';
import { Workspace } from '@equinor/workspace-fusion';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { GroupingOption } from '@equinor/workspace-garden';

export function App() {
  return (
    <Workspace<{ id: string }>
      workspaceOptions={{ getIdentifier: (a) => a.id }}
      gridOptions={{
        columnDefinitions: [{ field: 'id' }],
        getRows: async ({ success, request }, filter) => {
          success({ rowData: [{ id: '123' }, { id: '125' }, { id: '9342' }, { id: '1212' }], rowCount: 4 });
        },
      }}
      sidesheetOptions={{
        type: 'default',
        DetailsSidesheet: (a) => {
          return <div onClick={() => a.close()}>hello am sidesheet</div>;
        },
      }}
      gardenOptions={{
        getGardenMeta: async (a, b, c) => {
          return {
            allGroupingOptions: [
              { groupingKey: 'RFOC', dimension: ['Daily', 'Weekly', 'Monthly'], type: ['Forecast', 'Planned'] },
              { groupingKey: 'RFCC', dimension: ['Daily', 'Weekly', 'Monthly'], type: ['Forecast', 'Planned'] },
              {
                groupingKey: 'Some very long keys',
                dimension: ['Daily', 'Weekly'],
                type: ['Forecast', 'Planned', 'Done'],
              },
              { groupingKey: 'System', dimension: null, type: null },
            ] as GroupingOption[],
            columnCount: 2,
            columnStart: 0,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
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
      }}
      filterOptions={{
        dataSource: {
          getFilterMeta: async () => [
            {
              filterItems: [
                { count: 10, value: '1' },
                { count: 9, value: '2' },
              ],
              isQuickFilter: true,
              name: 'test',
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
