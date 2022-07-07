import { Button } from '@equinor/eds-core-react';
import { Garden, GardenController } from '@workspace/garden';
import { DataSourceController, Workspace, WorkspaceController } from '@workspace/workspace';
import { FilterApi, useFilterApi } from '@workspace/filter';
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

function makeGridController() {
    const controller = new GridController();
    controller.columnDefs = [
        { field: 'id' },
        { field: 'title' },
        { field: 'description' },
        { field: 'sequenceNumber' },
        { field: 'serialNumber' },
    ];
    return controller;
}

const queryClient = new QueryClient();

export function TestWorkspaceApp() {
    const filterController = useFilterApi({
        data: [],
        filterConfiguration: [{ name: 'Test', valueFormatter: (s) => s['sequenceNumber'] }],
    });

    const controller = useRef<WorkspaceController<unknown>>(
        InitThisSpecificWorkspace(filterController as any)
    );

    return (
        <div>
            <Button onClick={() => console.log(controller)}> Logitty log</Button>
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
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly9kZjcxZjViNS1mMDM0LTQ4MzMtOTczZi1hMzZjMmQ1ZjllMzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNjU3MTg3MzI0LCJuYmYiOjE2NTcxODczMjQsImV4cCI6MTY1NzE5MjM0MiwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXFIVVE3MW44akczVHJSVTZ0ZlpPcXpXNzEyeWs4OXFISnlab2p4T293TXdKYU4rUXFOM2RJaUpvY1hIMm9Mb0JEY2hVMVNRcjJSdzB0ejlMa3cxTUtycjBqdnZxZUFGL0NPZEJXSDZGZU1RPSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiJkZmMzYTU4ZC00NzFlLTQ0OGQtYWRkOS1hMDIwMTJmYjFhOGQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjM0NDllOWM1LWFjMGQtNDRmMi05ODNlLWIzMzQ1OWMxNTBmYSIsImZhbWlseV9uYW1lIjoiRWlrYWFzIiwiZ2l2ZW5fbmFtZSI6Ikd1c3RhdiIsImlwYWRkciI6IjIxMy4yMzYuMTQ4LjQ1IiwibmFtZSI6Ikd1c3RhdiBFaWthYXMiLCJvaWQiOiJkZmVhYThkZS05MmQyLTRlZTQtYjE3MS02Y2FiYTBjMTYzYmYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjIwNTIzMzg4LTEwODUwMzEyMTQtNzI1MzQ1NTQzLTI2MTY4MTMiLCJyaCI6IjAuQVFzQU5hS2tPdUsyMVVpUmxYX1BCYlJac0xYMWNkODA4RE5JbHotamJDMWZuakVDQU5VLiIsInNjcCI6IkZpbGVzLnJlYWR3cml0ZSIsInN1YiI6ImlPXzM4T2pBX1BhZ0I3MmlWYjhFTDd2QTBvcWVEZWlOYm5vR3NzS2ZSemsiLCJ0aWQiOiIzYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAiLCJ1bmlxdWVfbmFtZSI6IkdVRUlAZXF1aW5vci5jb20iLCJ1cG4iOiJHVUVJQGVxdWlub3IuY29tIiwidXRpIjoiZUZBZjNURW9KMGVlcVFtbHRHdGpBQSIsInZlciI6IjEuMCJ9.YX_0buGvBewx1w0pylrxk-FI24nI_JtzZc1tIeIrnwrzH3oNLadi5MO9QpZLdPS92D7VzNpUmpv7Sz7zw62u81zX2k7VS4q4-R3eNKiafFyUGcyXcZYLoUZVsdIKUO8UU3xgOn0n7bGENvrzyrJdIE-1ijFjMg3UNt_NCUhujT0EtEUAeTxrAI6rVd3E1DtJEUftl0J2h09-WFeHvKuk8ezJL4nJZnrSVVXJoNZyB3-_ZhDhoSGCy3dDH57RGnVOaXkFZTbN1RDCLoRjugP6NvzO_ztklJMGdOFiphF6JIPomP1qvlVjEvR0I56Ydx-pqbEKt1QdRAHmjZgx3S6ICQ`, // This is the important part, the auth header
            },
        }
    );
};

function InitThisSpecificWorkspace(filterController: FilterApi<unknown>) {
    //Base workspace controller
    const controller = new WorkspaceController();

    /**
     * Add datasource controller to workspace controller
     */
    controller.addHeadlessController({
        name: 'DataSource',
        controller: new DataSourceController(defaultFetch),
        binder: dataSourceBinder,
    });

    controller.addHeadlessController({
        name: 'Filter',
        controller: filterController,
    });
    // controller.addHeadlessController({name: "Filter"}, new FilterController()) To be made..

    /**
     * Add tabs
     */

    controller.addTab<Test>({
        controller: makeGardenController(),
        name: 'Garden',
        ViewComponent: Garden,
        binder: gardenBinder,
    });
    controller.addTab({
        controller: makeGridController(),
        name: 'Grid',
        ViewComponent: Grid,
        binder: gridBinder,
    });

    return controller;
}

function dataSourceBinder<T = unknown>(dc: DataSourceController<T>, wc: WorkspaceController<T>) {
    dc.registerListener('Workspace data', () => wc.setOriginalData(dc.data));
}

function gardenBinder(gc: Test, wc: WorkspaceController<unknown>) {
    wc.onOriginalDataChanged((data) => gc.setData(data as any));
}

function gridBinder<T = unknown>(gc: GridController<T>, wc: WorkspaceController<T>) {
    wc.onOriginalDataChanged((data) => (gc.rowData = data));
}
