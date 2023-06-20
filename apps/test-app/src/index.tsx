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
            columnCount: 10,
            columnStart: 5,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
          };
        },
        getBlockAsync: (a) => {
          console.log('block', a);
          throw new Error('');
        },
        getDisplayName: () => '',
        getHeader: (a) => {
          console.log('header', a);
          throw new Error('');
        },
        getSubgroupItems: () => {
          throw new Error('');
        },
        initialGrouping: { horizontalGroupingAccessor: 'RFOC', verticalGroupingKeys: [] },
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
