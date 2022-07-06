import { Button } from '@equinor/eds-core-react';
import { Garden, GardenController } from '@workspace/garden';
import {
    DataSourceController,
    onFilteredDataChangedPlugin,
    onOriginalDataChangedPlugin,
    onTabChangedPlugin,
    Tab,
    Workspace,
    WorkspaceController,
} from '@workspace/workspace';
import { createContext } from 'react';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultInterface, mockData } from './makeMockData';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, GridController } from '@workspace/ag-grid';

type Test = GardenController<DefaultInterface>;

function makeGardenController() {
    const controller = new GardenController({
        data: mockData(),
        initialGrouping: {
            horizontalGroupingAccessor: 'state',
            verticalGroupingKeys: [],
        },
        nodeLabelCallback: (s) => s.sequenceNumber,
        objectIdentifier: 'id',
    });
    return controller;
}

const GardenConfig: Tab<Test> = {
    controller: makeGardenController(),
    name: 'Garden',
    ViewComponent: Garden,
};

const queryClient = new QueryClient();

export function TestWorkspaceApp() {
    const controller = useRef<WorkspaceController<unknown>>(InitThisSpecificWorkspace());

    return (
        <div>
            <WorkspaceContext.Provider value={controller.current}>
                <QueryClientProvider client={queryClient}>
                    <Button onClick={() => console.log(controller.current.tabs)}>Log tabs</Button>

                    <Button>Log workspace api</Button>
                    <Workspace controller={controller.current} />
                </QueryClientProvider>
            </WorkspaceContext.Provider>
        </div>
    );
}

export const WorkspaceContext = createContext<WorkspaceController<unknown>>({} as any);

const defaultFetch = async () => {
    return await fetch(
        'https://app-ppo-scope-change-control-api-dev.azurewebsites.net/api/scope-change-requests',
        {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly9kZjcxZjViNS1mMDM0LTQ4MzMtOTczZi1hMzZjMmQ1ZjllMzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNjU3MDI2NDYwLCJuYmYiOjE2NTcwMjY0NjAsImV4cCI6MTY1NzAzMDQxMCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXRqTXRwZHdoUy9mN1ozaVA0REpnS3kyN2tROURlQUV0aTlsOTMzVnUzdUIzbVJpOHZxalFrVTJXM2tacm1hRFdZc0pPajdBeTRVQ25Rdjg3ejZEaXVBQmcrRmc5Y0lmUC92NXNYb1I1V0RFPSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiJkZmMzYTU4ZC00NzFlLTQ0OGQtYWRkOS1hMDIwMTJmYjFhOGQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjM0NDllOWM1LWFjMGQtNDRmMi05ODNlLWIzMzQ1OWMxNTBmYSIsImZhbWlseV9uYW1lIjoiRWlrYWFzIiwiZ2l2ZW5fbmFtZSI6Ikd1c3RhdiIsImlwYWRkciI6Ijg0LjIxMC4xOTcuODgiLCJuYW1lIjoiR3VzdGF2IEVpa2FhcyIsIm9pZCI6ImRmZWFhOGRlLTkyZDItNGVlNC1iMTcxLTZjYWJhMGMxNjNiZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMjYxNjgxMyIsInJoIjoiMC5BUXNBTmFLa091SzIxVWlSbFhfUEJiUlpzTFgxY2Q4MDhETklsei1qYkMxZm5qRUNBTlUuIiwic2NwIjoiRmlsZXMucmVhZHdyaXRlIiwic3ViIjoiaU9fMzhPakFfUGFnQjcyaVZiOEVMN3ZBMG9xZURlaU5ibm9Hc3NLZlJ6ayIsInRpZCI6IjNhYTRhMjM1LWI2ZTItNDhkNS05MTk1LTdmY2YwNWI0NTliMCIsInVuaXF1ZV9uYW1lIjoiR1VFSUBlcXVpbm9yLmNvbSIsInVwbiI6IkdVRUlAZXF1aW5vci5jb20iLCJ1dGkiOiJaT0FIYkx3aW5VZVVidUo2bzZ3LUFBIiwidmVyIjoiMS4wIn0.Y59UPOkJmGBMSUfn7quQwWMVT5Oi6ES4hqo-3PBFuTDPdF02cBKYDEMRa4RRhphw7nxh288zNbqeHoN_GcgyJwgP3KZFKgihxN6rpqgYFIHgKBoSAiLeTSwFxqigth73wJRWPA9j3BbZIK5mdj50zgvXvB2bfpL5xgE-vAS-EwyBio-yAqiVZEoiPqTYi_eb0XcY2gsPZhqRzZF3UcAsfZqv37kGkV8zEMZHTVear5NuzKj9ix62v6AfvCGzS_lhdH31ljvUq___VQQRjp20AgGAPrf8dlfZMrrtVAPmVawXUkJnpDJ011eTHZTytKgcjct1NTGLqAAclfXCFV4yEg`, // This is the important part, the auth header
            },
        }
    );
};

function InitThisSpecificWorkspace() {
    //Base workspace controller
    const controller = new WorkspaceController();
    /**
     * Register navigation plugin
     */
    controller.registerPlugin((controller) =>
        onTabChangedPlugin(controller, () => {
            //Do some url stuff, handle navigation
        })
    );

    /**
     * Controller for handling data
     */
    const dataSourceController = new DataSourceController(defaultFetch);
    /**
     * Add datasource controller to workspace controller
     */
    controller.addHeadlessController({ name: 'DataSource', controller: dataSourceController });
    // controller.addHeadlessController({name: "Filter"}, new FilterController()) To be made..

    /**
     * Fire callback to update workspace data with the new data from data source
     */
    dataSourceController.registerListener('Workspace data', () =>
        controller.setOriginalData(dataSourceController.data)
    );
    /**
     * Add tabs
     */

    const gridController = new GridController();
    gridController.columnDefs = [{ field: 'id' }, { field: 'title' }, { field: 'description' }];
    controller.registerTab(GardenConfig);
    controller.registerTab({
        controller: gridController,
        name: 'Grid',
        ViewComponent: Grid,
    });

    /**
     * Let all tabs know the workspace base data has changed
     */
    controller.registerPlugin((c) =>
        onOriginalDataChangedPlugin(c, () => {
            // Garden does not have to know about original data, only filtered data
            GardenConfig.controller.setData(c.originalData as any);
            console.log('Setting grid data');
            gridController.rowData = c.originalData;
        })
    );

    /**
     * Let tabs know filtered data changed
     */
    controller.registerPlugin((c) =>
        onFilteredDataChangedPlugin(c, () => {
            GardenConfig.controller.setData(c.filteredData as any);
        })
    );

    return controller;
}
