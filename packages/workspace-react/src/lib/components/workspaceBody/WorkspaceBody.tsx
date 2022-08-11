import { ResizableSidesheet } from '../resizableSidesheet';
import { WorkspaceProps } from '../Workspace';
import { WorkspaceDataLoader } from '../workspaceDataLoader';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody<TabNames extends string, TError>({ controller }: WorkspaceProps<TabNames, TError>) {
    return (
        <StyledWorkspaceBody>
            <WorkspaceDataLoader controller={controller}>
                <WorkspaceTab controller={controller} />
            </WorkspaceDataLoader>
            <ResizableSidesheet controller={controller} />
        </StyledWorkspaceBody>
    );
}
