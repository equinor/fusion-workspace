import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledSubGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  margin-bottom: 4px;
  border: 1px solid ${tokens.colors.text.static_icons__tertiary.rgba};
  border-radius: 5px;
  color: ${tokens.colors.text.static_icons__default.rgba};
  width: 98%;
  height: 85%;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    opacity: 0.5;
  }
`;

export const StyledCount = styled.span`
  color: ${tokens.colors.text.static_icons__default.rgba};
  font-weight: 300;
  font-size: 0.8rem;
  margin-left: 0.8em;
  padding-bottom: 0.5rem;
`;

export const StyledSubGroupText = styled.div`
  display: flex;
  margin-left: 4px;
  margin-top: 6px;
  font-variant-numeric: tabular-nums;
`;
