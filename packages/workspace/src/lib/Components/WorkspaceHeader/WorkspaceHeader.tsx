import { StatusBar } from '../';
import { TabNavigation } from '../TabNavigation';
import { StyledWorkspaceHeader } from './workspaceHeader.styles';

/**
 * Workspace header component.
 * Contains tab navigation and status bar
 */
export function WorkspaceHeader() {
    return (
        <StyledWorkspaceHeader>
            <StatusBar />
            <TabNavigation />
        </StyledWorkspaceHeader>
    );
}
