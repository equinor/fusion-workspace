import { Button } from '@equinor/eds-core-react';
import {
    createFusionWorkspace,
    FusionWorkspaceController,
    FusionWorkspaceControllers,
} from '@equinor/workspace-fusion';
import { useFilteredData, Workspace } from '@equinor/workspace-react';
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
                    title: 'Tom Jones',
                    description: 'Music with Tom',
                },
                {
                    id: 2,
                    title: 'Ron Jonsens Life',
                    description: 'A life not worth living',
                },
                {
                    id: 3,
                    title: 'Hello Johnny',
                    description: 'wooo hoo party people',
                },
                {
                    id: 4,
                    title: 'Ohh No!',
                    description: 'this is a dumb description',
                },
            ],
        } as unknown as Response;
    },
});

interface MyData {
    id: string;
    title: string;
    description: string;
}
interface MyController {
    data: MyData[];
}

interface MyControllers extends FusionWorkspaceControllers<MyData> {
    test: MyController;
}

const myController: MyController = {
    data: [],
};

export function TestWorkspaceApp() {
    const ws = createFusionWorkspace<
        {
            id: string;
            title: string;
            description: string;
        },
        any
    >((workspace) => {
        workspace
            .config({
                activeTab: 'test',
            })
            .addCustomTab<MyController, FusionWorkspaceController<MyData, any, MyControllers>>({
                controller: myController,
                ViewComponent: () => {
                    const data = useFilteredData();
                    return (
                        <>
                            <h1>Test tab1</h1>
                            <div>
                                {data.map((i) => (
                                    <p key={i.id}>
                                        {i.title} - {i.description}
                                    </p>
                                ))}
                            </div>
                        </>
                    );
                },
                name: 'test',
            })
            .addCustomTab<MyController, FusionWorkspaceController<MyData, any, MyControllers>>({
                controller: myController,
                ViewComponent: () => {
                    const data = useFilteredData();
                    return (
                        <>
                            <h1>Test tab2</h1>
                            <div>
                                {data.map((i) => (
                                    <p key={i.id}>
                                        2 -{i.title} - {i.description}
                                    </p>
                                ))}
                            </div>
                        </>
                    );
                },
                name: 'test2',
            })
            .addDataSource(dataSource)
            .addFilter(() => [
                {
                    name: 'Title',
                    valueFormatter: (item) => item.title,
                },
                {
                    name: 'Description',
                    valueFormatter: (item) => item.description,
                },
            ]);
    });
    return (
        <div>
            <DebugRow>
                <Button onClick={() => console.log(ws)}>Log workspace api</Button>
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
