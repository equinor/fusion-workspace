import { Sidesheet } from '@workspace/sidesheet';
import { useWorkspaceController } from '../../Hooks';
import { WorkspaceTab } from '../';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
    const controller = useWorkspaceController();

    return (
        <StyledWorkspaceBody>
            <WorkspaceTab />
            <Sidesheet
                controller={
                    controller.controllers.find((s) => s.name === 'Sidesheet')?.controller as any
                }
            />
        </StyledWorkspaceBody>
    );
}
