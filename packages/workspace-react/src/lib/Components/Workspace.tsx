import { WorkspaceBody, WorkspaceDataLoader, WorkspaceHeader, WorkspaceProviderLayer } from '.';
import { FusionWorkspaceController } from '..';

export interface WorkspaceProps<T> {
    controller: FusionWorkspaceController<T>;
}

export function Workspace<T>({ controller }: WorkspaceProps<T>) {
    return (
        <div>
            <WorkspaceProviderLayer controller={controller}>
                <WorkspaceDataLoader>
                    <WorkspaceHeader />
                    <WorkspaceBody />
                </WorkspaceDataLoader>
            </WorkspaceProviderLayer>
        </div>
    );
}
