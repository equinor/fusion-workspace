import { FusionWorkspaceControllers } from './types';
import { createFusionWorkspace } from './workspace-fusion';
interface Data {
    test: string;
}

interface Fusion {
    httpClient: () => string;
}
interface MyControllers<TData> extends FusionWorkspaceControllers<TData> {
    test: { test: number };
}

const dataSource = () => ({
    dataSource: async (signal) => {
        return await fetch('api/test', { signal });
    },
});

describe('workspaceFusion', () => {
    it('should work', () => {
        const fusionWorkspace = createFusionWorkspace<Data, MyControllers<Data>, Fusion>(
            (workspace) => {
                workspace.addDataSource(dataSource);
                return workspace;
            },
            { httpClient: () => 'workspace-fusion' }
        );

        expect(fusionWorkspace.context.httpClient()).toEqual('workspace-fusion');
    });
});
