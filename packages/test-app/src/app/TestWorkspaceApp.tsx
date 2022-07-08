import { Garden, GardenController } from '@workspace/garden';
import { DataSourceController, Workspace, WorkspaceController } from '@workspace/workspace';
import { FilterController } from '@workspace/filter';
import { createContext } from 'react';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultInterface, mockData } from './makeMockData';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, GridController } from '@workspace/ag-grid';
import styled from 'styled-components';
import { Button } from '@equinor/eds-core-react';
import { Sidesheet, SidesheetController } from '@workspace/sidesheet';
import { debugPlugin } from './debugger';
// import { SidesheetController } from '@workspace/sidesheet';

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
    controller.gridOptions = {
        rowHeight: 50,
    };
    return controller;
}

const queryClient = new QueryClient();

export function TestWorkspaceApp() {
    const controller = useRef<WorkspaceController<unknown>>(InitThisSpecificWorkspace());

    const getFilterController = () =>
        controller.current.controllers.find((s) => s.name === 'Filter')?.controller;

    return (
        <div>
            <DebugRow>
                <Button onClick={() => console.log(controller)}>Log workspace api</Button>
                <Button
                    onClick={() => {
                        const controller =
                            getFilterController() as unknown as FilterController<unknown>;
                        controller.setFilterState([
                            { name: 'TEst', values: [883, 898, 895, 123, 124, 125, 126, 127] },
                        ]);
                    }}
                >
                    Set filterstate
                </Button>
            </DebugRow>
            <WorkspaceContext.Provider value={controller.current}>
                <QueryClientProvider client={queryClient}>
                    <Workspace controller={controller.current} />
                </QueryClientProvider>
            </WorkspaceContext.Provider>
        </div>
    );
}

const DebugRow = styled.div`
    display: flex;
    gap: 0.2em;
`;

export const WorkspaceContext = createContext<WorkspaceController<unknown>>({} as any);

const defaultFetch = async () => {
    return await fetch(
        'https://app-ppo-scope-change-control-api-dev.azurewebsites.net/api/scope-change-requests',
        {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly9kZjcxZjViNS1mMDM0LTQ4MzMtOTczZi1hMzZjMmQ1ZjllMzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNjU3Mjc5NjI2LCJuYmYiOjE2NTcyNzk2MjYsImV4cCI6MTY1NzI4Mzc4MywiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXJ3bDFzc24xcThDL1dkV0RHanVFR1EzYnZtZk94bWEvL3hVMkZ2QzE5RzcvUDJ1UWtnNVVDOEw0bDZaaGtZN2plSjNFcThvVEw1Z2JHdGJtV0hxVHlUd1pqSWI1NFBWeDh4aVZvMlN0T3A4PSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiJkZmMzYTU4ZC00NzFlLTQ0OGQtYWRkOS1hMDIwMTJmYjFhOGQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjM0NDllOWM1LWFjMGQtNDRmMi05ODNlLWIzMzQ1OWMxNTBmYSIsImZhbWlseV9uYW1lIjoiRWlrYWFzIiwiZ2l2ZW5fbmFtZSI6Ikd1c3RhdiIsImlwYWRkciI6Ijg0LjIxMC4xOTcuODgiLCJuYW1lIjoiR3VzdGF2IEVpa2FhcyIsIm9pZCI6ImRmZWFhOGRlLTkyZDItNGVlNC1iMTcxLTZjYWJhMGMxNjNiZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMjYxNjgxMyIsInJoIjoiMC5BUXNBTmFLa091SzIxVWlSbFhfUEJiUlpzTFgxY2Q4MDhETklsei1qYkMxZm5qRUNBTlUuIiwic2NwIjoiRmlsZXMucmVhZHdyaXRlIiwic3ViIjoiaU9fMzhPakFfUGFnQjcyaVZiOEVMN3ZBMG9xZURlaU5ibm9Hc3NLZlJ6ayIsInRpZCI6IjNhYTRhMjM1LWI2ZTItNDhkNS05MTk1LTdmY2YwNWI0NTliMCIsInVuaXF1ZV9uYW1lIjoiR1VFSUBlcXVpbm9yLmNvbSIsInVwbiI6IkdVRUlAZXF1aW5vci5jb20iLCJ1dGkiOiJPSVhwQzNoU3VVYUY5QW9EeUpvTkFBIiwidmVyIjoiMS4wIn0.g7ehPr1Ln4zPk4OXnYYJqrdL9yh6gPQEQfR2Lvoh9i3Jrp8Hng93p2VfI_uj4zoEOKMe3_57hGVcFVlt_Yx0vedi72v1z2IjgjjL7Kw8Xsb_jIDVE-EvYKbloeFV3tayyYaAd7iRJvq2e7uXibkfqlH5evywuI6WMdaIu45XPRNCHaQue-rffIFabk4Trb3IKuJ_3CrjOMkSkcstqmAALAGvxexneeTqeZwyGqS974l0oEn3RElKcyHViW6U-aqh7MFbBOPG_iQWumNIJQEibiYlELGM1DFtodNojQnjUVDFZZ8ryROKbjzon7G4j6cIbwK3oWg8bbYwj1WyYevElA`, // This is the important part, the auth header
            },
        }
    );
};

type ClickEvent<T> = GardenClickEvent<T> | GridClickEvent<T>;

interface GardenClickEvent<T> {
    type: 'Garden';
    item: T;
    controller: GardenController<T>;
}

interface GridClickEvent<T> {
    type: 'Grid';
    item: T;
    controller: GridController<T>;
}

function InitThisSpecificWorkspace() {
    //Base workspace controller
    const controller = new WorkspaceController<
        unknown,
        ClickEvent<unknown>,
        any,
        { persist: () => void }
    >();
    debugPlugin(controller);

    /**
     * Add datasource controller to workspace controller
     */
    controller.addController({
        name: 'DataSource',
        controller: new DataSourceController(defaultFetch),
        binder: dataSourceBinder,
    });

    controller.addController({
        controller: new SidesheetController(),
        name: 'Sidesheet',
        binder: (sc, wc) => {
            wc.onClickCallback((ev) => {
                sc.setItem(ev.item);
                sc.setSidesheetState(true);
            });
        },
    });

    const filterController = new FilterController();
    filterController.addValueFormatters([
        { name: 'TEst', valueFormatter: (s) => (s as any)?.['sequenceNumber'] },
    ]);

    controller.addController({
        name: 'Filter',
        controller: filterController,
        binder: (fc, wc) => {
            const old = fc.setFilteredData;
            fc.setFilteredData = (newData) => {
                old(newData);
                wc.setFilteredData(newData);
            };

            wc.onOriginalDataChanged(() => {
                fc.data = wc.originalData;
                fc.createFilterValues();
                fc.filter();
            });
        },
    });

    /**
     * Add tabs
     */

    controller.addTab<Test>({
        controller: makeGardenController(),
        name: 'Garden',
        ViewComponent: Garden,
        binder: gardenBinder,
    });
    controller.setActiveTabIndex('Garden');
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
    wc.onFilteredDataChanged((data) => gc.setData(data as any));
    const old = gc.clickEvents.onClickItem;

    gc.clickEvents.onClickItem = (arg1, arg2) => {
        old && old(arg1, arg2);
        wc.notifyOnClick({ item: arg1, controller: arg2 });
    };
}

function gridBinder<T = unknown>(gc: GridController<T>, wc: WorkspaceController<T>) {
    wc.onFilteredDataChanged((data) => {
        gc.rowData = data;
    });

    gc.columnDefs.forEach(
        (s) =>
            (s.onCellClicked = (ev) => {
                wc.notifyOnClick({ type: 'Grid', item: ev.data, controller: gc });
            })
    );
}
