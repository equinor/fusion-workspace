import { Button } from '@equinor/eds-core-react';
import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Workspace } from '@equinor/workspace-react-old';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import styled from 'styled-components';

// type Test = GardenController<DefaultInterface>;

// function makeGardenController() {
//     const controller = new GardenController({
//         data: mockData(),
//         initialGrouping: {
//             horizontalGroupingAccessor: 'state',
//             verticalGroupingKeys: [],
//         },
//         nodeLabelCallback: (s) => s.sequenceNumber,
//         objectIdentifier: 'id',
//     });
//     return controller;
// }

// function makeGridController() {
//     const controller = new GridController();
//     controller.columnDefs = [
//         { field: 'id' },
//         { field: 'title' },
//         { field: 'description' },
//         { field: 'sequenceNumber' },
//         { field: 'serialNumber' },
//     ];
//     controller.gridOptions = {
//         rowHeight: 50,
//     };
//     return controller;
// }

const dataSource = () => ({
    dataSource: async () => {
        return {
            ok: true,
            json: () => [
                {
                    id: 1,
                    title: 'title1',
                    description: 'this is a description',
                },
                {
                    id: 2,
                    title: 'title2',
                    description: 'this is a description',
                },
                {
                    id: 3,
                    title: 'title3',
                    description: 'this is a description',
                },
                {
                    id: 4,
                    title: 'title4',
                    description: 'this is a description',
                },
            ],
        } as unknown as Response;
    },
});

export function TestWorkspaceApp() {
    const ws = createFusionWorkspace(
        (workspace) => {
            workspace.addDataSource(dataSource);
            workspace.addFilter();
            return workspace;
        },
        { test: 'string' }
    );

    return (
        <div>
            <DebugRow>
                <Button onClick={() => console.log(ws)}>Log workspace api</Button>
                <Button
                    onClick={() => {
                        ws?.controllers.filter.setFilterState([
                            { name: 'TEst', values: [883, 898, 895, 123, 124, 125, 126, 127] },
                        ]);
                    }}
                >
                    Set filterstate
                </Button>
            </DebugRow>

            <Workspace controller={ws} />
        </div>
    );
}

const DebugRow = styled.div`
    display: flex;
    gap: 0.2em;
`;

// function InitThisSpecificWorkspace() {
//     //Base workspace controller
//     const controller = new WorkspaceController<
//         unknown,
//         any,
//         ClickEvent<unknown>,
//         any,
//         { persist: () => void }
//     >();
//     // debugPlugin(controller);

//     controller.addController({
//         controller: new SidesheetController(),
//         name: 'Sidesheet',
//         config: (sc, wc) => {
//             wc.onClick((ev) => {
//                 sc.setItem(ev.item);
//                 sc.setSidesheetState(true);
//             });
//         },
//     });

//     const filterController = new FilterController();
//     filterController.addValueFormatters([
//         { name: 'TEst', valueFormatter: (s) => (s as any)?.['sequenceNumber'] },
//     ]);

//     controller.addController({
//         name: 'Filter',
//         controller: filterController,
//         config: (fc, wc) => {
//             const old = fc.setFilteredData;
//             fc.setFilteredData = (newData) => {
//                 old(newData);
//                 wc.setFilteredData(newData);
//             };

//             wc.onOriginalDataChanged(() => {
//                 fc.data = wc.originalData;
//                 fc.createFilterValues();
//                 fc.filter();
//             });
//         },
//     });

//     /**
//      * Add tabs
//      */

//     controller.addTab<Test>({
//         controller: makeGardenController(),
//         name: 'Garden',
//         config: gardenBinder,
//     });
//     controller.setActiveTab('Garden');
//     controller.addTab({
//         controller: makeGridController(),
//         name: 'Grid',

//         config: gridBinder,
//     });

//     return controller;
// }

// function gardenBinder(gc: Test, wc: WorkspaceController<unknown, any>) {
//     wc.onFilteredDataChanged((data) => gc.setData(data as any));
//     const old = gc.clickEvents.onClickItem;

//     gc.clickEvents.onClickItem = (arg1, arg2) => {
//         old && old(arg1, arg2);
//         wc.notifyOnClick({ item: arg1, controller: arg2 });
//     };
// }

// function gridBinder<T = unknown>(gc: GridController<T>, wc: WorkspaceController<T, any>) {
//     wc.onFilteredDataChanged((data) => {
//         gc.rowData = data;
//     });

//     gc.columnDefs.forEach(
//         (s) =>
//             (s.onCellClicked = (ev) => {
//                 wc.notifyOnClick({ type: 'Grid', item: ev.data, controller: gc });
//             })
//     );
// }ws
