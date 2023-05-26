import { StatusItem } from '@equinor/workspace-fusion/status-bar';
import { SidesheetConfig } from '@equinor/workspace-fusion/sidesheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PowerBiConfig } from '@equinor/workspace-fusion/power-bi';
import Workspace, { WorkspaceConfig } from '@equinor/workspace-fusion';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { powerBiModule } from '@equinor/workspace-fusion/power-bi-module';

import { gridConfig } from './Grid';
import { filterDataSource } from './Filter';

type S = {
  id: string;
  age: number;
  contextId: string;
};

const options: WorkspaceConfig<S> = {
  getIdentifier: (s: any) => s.workOrderId,
  appKey: 'Handover',
  defaultTab: 'grid',
};

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

function App() {
  // const getData = async (filters: FilterStateGroup[], signal?: AbortSignal): Promise<StatusItem[]> => {
  //   const res = await makeRequest('work-orders/kpis', { filter: filters }, signal);

  //   return (await res.json()).map((s: any) => ({ title: s.name, value: s.value }));
  // };

  return (
    <QueryClientProvider client={client}>
      <div className="App" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Workspace
          // statusBarOptions={getData}
          workspaceOptions={options}
          gridOptions={gridConfig}
          // gardenOptions={gardenConfig}
          filterOptions={{ dataSource: filterDataSource }}
          // filterOptions={filterOptions}
          sidesheetOptions={sidesheet}
          // powerBiOptions={tabs.includes('powerbi') ? powerbiOptions : undefined}
          modules={[powerBiModule, gridModule, gardenModule]}
        />
      </div>
    </QueryClientProvider>
  );
}

const Meta = () => {
  throw new Promise((res, rej) => setTimeout(res, 5000));
};

export default App;

const sidesheet: SidesheetConfig<S, { length: number }, MyTypes> = {
  type: 'default',
  CreateSidesheet: () => {
    return <div style={{ width: '500px', background: 'red' }}>Am create sideshet</div>;
  },
  DetailsSidesheet: (props) => {
    return (
      <div style={{ width: '500px', height: '100%', background: 'red' }}>
        am details {JSON.stringify(props)}
        <button onClick={() => props.controller.invalidate && props.controller.invalidate()}>Invalidate</button>
      </div>
    );
  },
};

type Admin = {
  type: 'admin';
};

type Custom2 = {
  type: 'custom2';
  props: { id: string };
};

type MyTypes = Admin | Custom2;

const powerbiOptions: PowerBiConfig = {
  getEmbed: async () => {
    throw new Error('', { cause: new Response(undefined, { status: 403 }) });
  },
  getErrorMessage: async () => {
    throw new Error('', { cause: new Response(undefined, { status: 403 }) });
  },
  getToken: async () => {
    throw new Error('', { cause: new Response(undefined, { status: 403 }) });
  },
  reportUri: 'unknown',
  ReportMetaData: Meta,
};
