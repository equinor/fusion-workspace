import { CircularProgress } from '@equinor/eds-core-react';
import { StyledWorkspaceLoadingSpinner } from './workspaceLoadingSpinner.styles';

export function WorkspaceLoadingSpinner() {
    return (
        <StyledWorkspaceLoadingSpinner>
            <CircularProgress size={48} />
        </StyledWorkspaceLoadingSpinner>
    );
}
