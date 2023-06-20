import React from 'react';
import { createRoot } from 'react-dom/client';
import { Workspace } from '@equinor/workspace-fusion';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';

export function App() {
  return (
    <Workspace<{ id: string }>
      workspaceOptions={{ getIdentifier: (a) => a.id }}
      gridOptions={{
        columnDefinitions: [{ field: 'id' }],
        getRows: async ({ success, request }, filter) => {
          console.log(filter);
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
        getGardenMeta: async (a, b) => {
          console.log('garden meta', a);
          return {
            allGroupingOptions: ['RFOC', 'RFCC', 'Some very long keys'],
            columnCount: 2,
            columnStart: 0,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
          };
        },
        getBlockAsync: async (a) => {
          console.log('block', a);
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
          console.log('header', a);
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
          getFilterMeta: async () => [{ filterItems: [{ count: 10, value: '1' }], isQuickFilter: true, name: 'test' }],
        },
      }}
      modules={[gridModule, gardenModule]}
    />
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
