
import { WorkspaceProps } from '../Workspace';
import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody<TabNames extends string, TError>({controller}: WorkspaceProps<TabNames, TError>) {
    return (
        <StyledWorkspaceBody>
            <WorkspaceTab controller={controller} />
        </StyledWorkspaceBody>
    );
}
