import { KPI } from '../Kpi';
import { TabNavigation } from '../TabNavigation';
import { StyledWorkspaceHeader } from './workspaceHeader.styles';

export function WorkspaceHeader() {
    return (
        <StyledWorkspaceHeader>
            <KPI />
            <TabNavigation />
        </StyledWorkspaceHeader>
    );
}
