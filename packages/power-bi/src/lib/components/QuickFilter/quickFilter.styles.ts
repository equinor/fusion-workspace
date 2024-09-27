import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCompactFilterWrapper = styled.div`
  width: 100%;
  background-color: ${tokens.colors.ui.background__light.hex};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
`;

export const StyledButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  white-space: nowrap;
`;

