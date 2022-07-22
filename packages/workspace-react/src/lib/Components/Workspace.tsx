import { ReactWorkspaceController } from '../Types/types';
import { WorkspaceBody } from './WorkspaceBody';
import { WorkspaceDataLoader } from './WorkspaceDataLoader';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceProviderLayer } from './WorkspaceProvider';

export interface WorkspaceProps<TData, TControllers, TOnClick, TError, TContext> {
    controller: ReactWorkspaceController<TData, TControllers, TOnClick, TError, TContext>;
}

export function Workspace<TData, TControllers, TOnClick, TError, TContext>(
    props: WorkspaceProps<TData, TControllers, TOnClick, TError, TContext>
) {
    return (
        <div>
            <WorkspaceProviderLayer controller={props.controller}>
                <WorkspaceDataLoader>
                    <WorkspaceHeader />
                    <WorkspaceBody />
                </WorkspaceDataLoader>
            </WorkspaceProviderLayer>
        </div>
    );
}
