import { Sidesheet } from '@equinor/sidesheet';
import { WorkspaceTab } from '../';
import { useWorkspaceController } from '../../Hooks';
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
