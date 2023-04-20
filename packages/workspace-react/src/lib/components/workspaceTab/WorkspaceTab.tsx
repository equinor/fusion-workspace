import { useActiveTab } from '../../hooks';
import styled from 'styled-components';
import { Suspense } from 'react';
import { CircularProgress } from '@equinor/eds-core-react';

const Loading = () => (
  <StyledCentering>
    <CircularProgress size={48} />
  </StyledCentering>
);

const StyledCentering = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

/**
 * Renders the current active workspace tab
 */
export function WorkspaceTab() {
  const activeTab = useActiveTab();

  if (!activeTab) return null;
  const { Component } = activeTab;
  return (
    <StyledWorkspaceTab id="workspace_tab_wrapper">
      <StyledWorkspaceTabContent id="workspace_tab_content">
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </StyledWorkspaceTabContent>
    </StyledWorkspaceTab>
  );
}

const StyledWorkspaceTab = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const StyledWorkspaceTabContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
