import { useActiveTab, useTabs } from '../../hooks';
import { ActionBar } from '../ActionBar';
import styled from 'styled-components';

export function WorkspaceHeader() {
  const tab = useActiveTab();

  if (!tab || !tab.CustomHeader) return <ActionBar />;

  return (
    <StyledWorkspaceHeader id="workspace_header_wrapper">
      <tab.CustomHeader />
    </StyledWorkspaceHeader>
  );
}

const StyledWorkspaceHeader = styled.div`
  padding-top: 5px;
  overflow: hidden;
  width: 100%;
`;
