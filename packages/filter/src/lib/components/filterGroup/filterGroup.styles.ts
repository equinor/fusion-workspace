import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledFilterGroupWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

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

export const StyledNormalText = styled.div`
  font-weight: 400;
`;

export const StyledVerticalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${tokens.colors.ui.background__medium.hex};
`;

export const StyledSearchHolder = styled.div<{ className: string }>`
  .${({ className }) => className} > div {
    background: none;
    box-shadow: none;
  }
`;

export const StyledMenuWrapper = styled.div`
  width: auto;
  max-width: 1000px;
  overflow: hidden;
  resize: horizontal;
  min-width: 200px; // Hacky way to move the resize drag button
  direction: rtl; // https://stackoverflow.com/a/60633726 resize is defaulted to be placed on the botton-right side of the div.
  > div {
    direction: ltr;
  } // So we make the div right-to-left, so the resize is moved to the bottom left corner.
`; // Then we change inner div to left-to-right again.

export const StyledFilterItemList = styled.div<{ items: number }>`
  height: ${({ items }) => (items > 10 ? '300px' : `${items * 22 + 16}px`)};
  padding: 8px 8px;
`;

export const StyledClearButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 8px;
  padding-right: 5px;
`;
