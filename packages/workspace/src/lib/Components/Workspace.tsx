import { WorkspaceBody, WorkspaceDataLoader, WorkspaceHeader, WorkspaceProviderLayer } from '.';
import { WorkspaceController } from '../Classes';

export interface WorkspaceProps<T> {
    controller: WorkspaceController<T>;
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
