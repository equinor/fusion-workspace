import { CircularProgress } from '@equinor/eds-core-react';
import { StyledWorkspaceLoadingSpinner } from './workspaceLoadingSpinner.styles';

/**
 * Loading spinner to be rendered when the workspace is fetching data
 */
export function WorkspaceLoadingSpinner() {
  return (
    <StyledWorkspaceLoadingSpinner>
      <CircularProgress size={48} />
    </StyledWorkspaceLoadingSpinner>
  );
}
