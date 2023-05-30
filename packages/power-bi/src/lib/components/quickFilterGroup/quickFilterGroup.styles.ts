import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledFilterGroupWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 2px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: ${tokens.colors.interactive.primary__hover_alt.hex};
  }
`;
