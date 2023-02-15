import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledFilterItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 12px;
`;

export const StyledExpandedFilterWrapper = styled.div`
  display: flex;
  height: 250px;
  overflow: hidden;
  border-bottom: 1px solid ${tokens.colors.ui.background__medium.hex};
`;

export const StyledSidebar = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.24);
`;
