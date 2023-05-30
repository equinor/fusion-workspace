import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCount = styled.span`
  font-size: 10px;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
export const StyledFilterLabelWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledFilterItemWrap = styled.div`
  grid-template-columns: auto 1fr auto;
  display: grid;
  align-items: center;
  padding-top: 2px;

  width: 100%;
  padding-bottom: 2px;
  > span {
    padding: 0px;

    > svg {
      width: 18px;
      height: 18px;
    }

    :first-child {
      padding-right: 2px;
    }
  }
  :hover {
    background-color: ${tokens.colors.interactive.primary__selected_hover.rgba};
  }
`;
