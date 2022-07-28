import { Button } from '@equinor/eds-core-react';
import { useFramework } from '@equinor/fusion-framework-react/hooks';
import {
    createFusionWorkspace,
    FusionWorkspaceController,
    FusionWorkspaceControllers,
} from '@equinor/workspace-fusion';
import { useFilteredData, Workspace } from '@equinor/workspace-react';

import styled from 'styled-components';
import { DefaultInterface, mockData } from './makeMockData';

const dataSource = () => ({
    dataSource: async () => {
        return {
            ok: true,
            json: () => mockData(),
        } as unknown as Response;
    },
});

interface MyController {
    data: DefaultInterface[];
}

interface MyControllers extends FusionWorkspaceControllers<DefaultInterface> {
    test: MyController;
}

const myController: MyController = {
    data: [],
};

export function TestWorkspaceApp() {
    const fusion = useFramework();
    const ws = createFusionWorkspace<DefaultInterface, any>((workspace) => {
        workspace
            .config({
                activeTab: 'List',
            })
            .addCustomTab<
                MyController,
                FusionWorkspaceController<DefaultInterface, any, MyControllers>
            >({
                controller: myController,
                ViewComponent: () => {
                    const data = useFilteredData<DefaultInterface>();
                    return (
                        <>
                            <h1>List</h1>
                            <div>
                                {data.map((i) => (
                                    <div key={i.id}>
                                        <h3 style={{ margin: 0 }}>
                                            {i.sequenceNumber} - {i.state}
                                        </h3>
                                        <p style={{ marginTop: 0 }}>{i.title}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    );
                },
                name: 'List',
            })
            .addCustomTab<
                MyController,
                FusionWorkspaceController<DefaultInterface, any, MyControllers>
            >({
                controller: myController,
                ViewComponent: () => {
                    const data = useFilteredData<DefaultInterface>();
                    return (
                        <>
                            <h1>Lines</h1>
                            <div>
                                {data.map((i) => (
                                    <p key={i.id}>
                                        {i.title} - {i.sequenceNumber}
                                    </p>
                                ))}
                            </div>
                        </>
                    );
                },
                name: 'Lines',
            })
            .addDataSource(dataSource)
            .addFilter(() => [
                {
                    name: 'Title',
                    valueFormatter: (item) => item.title,
                },
                {
                    name: 'Sequence Number',
                    valueFormatter: (item) => item.sequenceNumber,
                },
                {
                    name: 'State',
                    valueFormatter: (item) => item.state,
                },
            ]);
    }, fusion);
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
