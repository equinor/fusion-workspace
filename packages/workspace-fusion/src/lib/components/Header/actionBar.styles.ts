import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledActionBar = styled.div`
  background-color: ${tokens.colors.ui.background__default.hex};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${tokens.colors.ui.background__medium.hex};
  height: 45px;
  width: 100%;
`;
