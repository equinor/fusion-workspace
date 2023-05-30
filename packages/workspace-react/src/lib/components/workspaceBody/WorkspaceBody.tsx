import { ReactNode } from 'react';

import { WorkspaceTab } from '../workspaceTab';
import { StyledWorkspaceBody } from './workspaceBody.styles';

type WorkspaceBodyProps = {
  children: ReactNode;
};

export function WorkspaceBody({ children }: WorkspaceBodyProps) {
  return (
    <StyledWorkspaceBody id={'workspace_body'}>
      <WorkspaceTab />
      {children}
    </StyledWorkspaceBody>
  );
}
