import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledWorkspaceHeader = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${tokens.colors.ui.background__medium.hex};
  height: 45px;
`;
