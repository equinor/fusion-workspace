import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCompactFilterWrapper = styled.div<{ isExpanded: boolean }>`
  display: grid;
  grid-template-columns: ${(e) => (e.isExpanded ? 'minmax(200px, 350px) 1fr' : 'minmax(200px, 350px) 1fr min-content')};
  grid-template-rows: 1fr;
  overflow: hidden;
  gap: 2em;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: ${tokens.colors.ui.background__light.hex};
  padding: 0 6px;
  box-sizing: border-box;
`;

export const StyledQuickFilterGroupsLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 48px;
  gap: 20px;
  align-items: center;
  padding: 12px 0;
  flex-wrap: wrap;
  overflow-y: hidden;
  box-sizing: border-box;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: ${tokens.colors.ui.background__light.hex};
  gap: 10px;
`;
