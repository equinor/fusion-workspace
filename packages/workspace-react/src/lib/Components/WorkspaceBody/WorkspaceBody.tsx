import { Sidesheet } from '@equinor/workspace-sidesheet';
import { useWorkspaceController } from '../../Hooks';
import { WorkspaceTab } from '../WorkspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
    const { controllers } = useWorkspaceController();
    return (
        <StyledWorkspaceBody>
            <WorkspaceTab />
            {controllers.sidesheet && <Sidesheet controller={controllers.sidesheet} />}
        </StyledWorkspaceBody>
    );
}
