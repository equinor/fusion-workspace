import { Garden, GardenController } from '@workspace/garden';
import { FusionWorkspaceController, Workspace } from '@workspace/workspace-react';
import { FilterController } from '@workspace/filter';
import { useRef } from 'react';
import { DefaultInterface, mockData } from './makeMockData';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, GridController } from '@workspace/ag-grid';
import styled from 'styled-components';
import { Button } from '@equinor/eds-core-react';
import { SidesheetController } from '@workspace/sidesheet';
import { DataSourceController } from '@workspace/datasource';
import { debugPlugin } from './debugger';
import { WorkspaceController } from '@workspace/workspace-core';

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

            <Workspace controller={makeFusionController<unknown>(controller.current)} />
        </div>
    );
}

function makeFusionController<T, TOnClick = any, TError = any, TContext = any>(
    workspaceController: WorkspaceController<T, TOnClick, TError, TContext>
): FusionWorkspaceController<T, TOnClick, TError, TContext> {
    const { controllers, tabs } = workspaceController;
    const controller = {
        dataSource:
            (workspaceController.controllers.find((s) => s.name === 'DataSource')
                ?.controller as DataSourceController<T>) ?? null,
        filter:
            (workspaceController.controllers.find((s) => s.name === 'Filter')
                ?.controller as FilterController<T>) ?? null,
        garden: (tabs.find((s) => s.name === 'Garden')?.controller as GardenController<T>) ?? null,
        grid: (tabs.find((s) => s.name === 'Grid')?.controller as GridController<T>) ?? null,
        sidesheet:
            (controllers.find((s) => s.name === 'Sidesheet')
                ?.controller as SidesheetController<T>) ?? null,
        ...workspaceController,
    };

    return controller as FusionWorkspaceController<T, TOnClick, TError, TContext>;
}

const DebugRow = styled.div`
    display: flex;
    gap: 0.2em;
`;

const defaultFetch = async () => {
    return await fetch(
        'https://app-ppo-scope-change-control-api-dev.azurewebsites.net/api/scope-change-requests',
        {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly9kZjcxZjViNS1mMDM0LTQ4MzMtOTczZi1hMzZjMmQ1ZjllMzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNjU3Mjg0MzI3LCJuYmYiOjE2NTcyODQzMjcsImV4cCI6MTY1NzI4OTI0MiwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUJ4OU5LN0pQd1Q4SFczVHlUeXZIeUdxeUcvMVp2dFR5TlBQY1VCNGJmTk1vNjQ3Q3dPV0xJZ0ZlUEhVeUFjMGN0a1BLTkxadEN5a2R1Unp2NFM4WTl2Wm9TUjljc2RxU3VzRFhKM0M2VXdzPSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiJkZmMzYTU4ZC00NzFlLTQ0OGQtYWRkOS1hMDIwMTJmYjFhOGQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjM0NDllOWM1LWFjMGQtNDRmMi05ODNlLWIzMzQ1OWMxNTBmYSIsImZhbWlseV9uYW1lIjoiRWlrYWFzIiwiZ2l2ZW5fbmFtZSI6Ikd1c3RhdiIsImlwYWRkciI6Ijg0LjIxMC4xOTcuODgiLCJuYW1lIjoiR3VzdGF2IEVpa2FhcyIsIm9pZCI6ImRmZWFhOGRlLTkyZDItNGVlNC1iMTcxLTZjYWJhMGMxNjNiZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMjYxNjgxMyIsInJoIjoiMC5BUXNBTmFLa091SzIxVWlSbFhfUEJiUlpzTFgxY2Q4MDhETklsei1qYkMxZm5qRUNBTlUuIiwic2NwIjoiRmlsZXMucmVhZHdyaXRlIiwic3ViIjoiaU9fMzhPakFfUGFnQjcyaVZiOEVMN3ZBMG9xZURlaU5ibm9Hc3NLZlJ6ayIsInRpZCI6IjNhYTRhMjM1LWI2ZTItNDhkNS05MTk1LTdmY2YwNWI0NTliMCIsInVuaXF1ZV9uYW1lIjoiR1VFSUBlcXVpbm9yLmNvbSIsInVwbiI6IkdVRUlAZXF1aW5vci5jb20iLCJ1dGkiOiJzNzhvSmRVb0owV2JLQl9VOFBVTUFBIiwidmVyIjoiMS4wIn0.pM8MlZXyCgCXAtJ3bpK1sMhokHnLhee_PrMZhEvWYsFyCzZZDHWvWxid703TY5ptbJjlue3559EDFG4DX1LWHfktkuNHxPU1hZChQB9ShZaWctbEVFjk2QyYYyNn5kr20wZCRzWbuNXx6P-1JvpH9QR-BlZkq48yva-PW0g9xoM2DkLsjxkkCenFliDDZdtUCLhHx8La4KWWRbni7yKN77pHysOhT9fW8rckVY2SVCR3MrDz4HV8jolb6PbxcetsKi1O_RJTR7QODedvPx7Qf6Zpotsa66yYREA8I_T8-WRr-VuNk3pIj_kniRPobMyNAZGotMhRR1hzQGEK39mtkw`, // This is the important part, the auth header
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
    dc.onDataChanged((data) => wc.setOriginalData(data));
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
