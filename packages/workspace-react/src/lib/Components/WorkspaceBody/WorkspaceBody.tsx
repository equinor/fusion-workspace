import { Sidesheet } from '@workspace/sidesheet';
import { useWorkspaceController } from '../../Hooks';
import { WorkspaceTab } from '../';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
    const { sidesheet } = useWorkspaceController();

    if (!sidesheet) {
        throw 'No sidesheet controller registered';
    }

    return (
        <StyledWorkspaceBody>
            <WorkspaceTab />
            <Sidesheet controller={sidesheet} />
        </StyledWorkspaceBody>
    );
}
