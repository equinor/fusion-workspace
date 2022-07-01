import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WorkspaceProps {}

const StyledWorkspace = styled.div`
  color: pink;
`;

export function Workspace(props: WorkspaceProps) {
  return (
    <StyledWorkspace>
      <h1>Welcome to Workspace!</h1>
    </StyledWorkspace>
  );
}

export default Workspace;
