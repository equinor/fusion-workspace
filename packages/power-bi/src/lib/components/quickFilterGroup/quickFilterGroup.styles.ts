import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledFilterGroupWrapper = styled.div`
  height: 50px;
  width: min-content;
  display: flex;
  align-items: center;
`;

export const StyledFilterGroupContent = styled.div`
  height: auto;
  width: min-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: ${tokens.colors.interactive.primary__hover_alt.hex};
  }
`;
