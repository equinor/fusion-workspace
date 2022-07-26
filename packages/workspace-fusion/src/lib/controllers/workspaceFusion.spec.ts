import { FusionWorkspaceControllers } from '../types/types';
import { createFusionWorkspace } from './workspaceFusion';
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
        const fusionWorkspace = createFusionWorkspace<Data, Fusion, MyControllers<Data>>(
            (workspace) => {
                workspace.addDataSource(dataSource);
                return workspace;
            },
            { httpClient: () => 'workspace-fusion' }
        );

        expect(fusionWorkspace.context?.httpClient()).toEqual('workspace-fusion');
    });
});
