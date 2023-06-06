import { ReactNode } from 'react';

import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

export function WorkspaceBody() {
  return (
    <StyledWorkspaceBody id={'workspace_body'}>
      <WorkspaceTab />
    </StyledWorkspaceBody>
  );
}
