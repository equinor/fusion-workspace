import { useRef } from 'react';
import { WorkspaceController } from '@workspace/workspace-core';
import { Workspace, WorkspaceViewController } from '@equinor/workspace-react';
import { Grid, GridController } from '@workspace/grid';
import { GardenIcon } from './icons/GardenIcon';
import { TableIcon } from './icons/TableIcon';

export function App() {
    return <TestWorkspace />;
}

type Tabs = 'Grid' | 'Garden';

interface ControllerInterface {
    view: WorkspaceViewController<Tabs, unknown>;
}
function createWorkspaceController() {
    const master = new WorkspaceController<unknown, ControllerInterface, unknown, unknown, unknown>();

    master.setData(mockData);
    master.setFilteredData(mockData);

    const gridController = new GridController();
    gridController.columnDefs = [{ field: 'id' }, { field: 'title' }, { field: 'description' }];
    gridController.rowData = mockData;

    const viewController = new WorkspaceViewController<Tabs, unknown>(
        [
            {
                Component: () => <Grid controller={gridController} />,
                name: 'Grid',
                HeaderComponent: TableIcon,
            },
            { Component: () => <div>am garden</div>, name: 'Garden', HeaderComponent: GardenIcon },
        ],
        'Grid'
    );
    viewController.sidesheet.Component = () => (
        <div style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>Look ma, im a sidesheet</div>
    );
    viewController.statusBarItems = [
        { title: 'Count', value: mockData.length },
        { title: 'filtered req', value: 500 },
        { title: 'Idk', value: 10 },
    ];

    master.addController({
        controller: viewController,
        name: 'view',
        config: (s) => void 0,
    });
    return master;
}

const TestWorkspace = () => {
    const controller = useRef(createWorkspaceController());

    return <Workspace controller={controller.current.controllers.view} />;
};

interface DefaultInterface {
    id: string;
    sequenceNumber: number;
    title: string;
    description: string;
    phase: string;
    originSource: string;
    originSourceId: string | null;
    changeCategory: ChangeCategory;
    scope: Scope;
}

interface ChangeCategory {
    id: string;
    name: string;
}
interface Scope {
    id: string;
    name: string;
}

const mockData: DefaultInterface[] = [
    {
        id: '30dfd9a8-6ac2-4ef5-0a66-08da58f76728',
        sequenceNumber: 895,
        title: 'Test for å lage draft',
        description: 'Test',
        phase: 'IC',
        originSource: 'NotApplicable',
        originSourceId: null,
        changeCategory: {
            id: 'd632b852-cdd8-4bc5-1adf-08da10a71e28',
            name: 'Quality',
        },
        scope: {
            id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06115',
            name: 'Hull',
        },
    },
    {
        id: 'dd220b54-5e7f-4d7c-e9cf-08da5830f332',
        sequenceNumber: 894,
        title: 'xxx',
        description: 'dsa',
        phase: 'IC',
        originSource: 'NotApplicable',
        originSourceId: null,
        changeCategory: {
            id: 'a4cda724-0290-4274-1ae1-08da10a71e18',
            name: 'EPma activity only',
        },
        scope: {
            id: 'b76c99b6-9046-4ac7-b08c-49f0a6b06112',
            name: 'Cargo Deck',
        },
    },
];
