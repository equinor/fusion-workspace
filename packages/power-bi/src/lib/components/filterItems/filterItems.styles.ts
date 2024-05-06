import styled from 'styled-components';

export const StyledFilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0.5rem;
  height: -webkit-fill-available;
`;

export const StyledCheckboxWrap = styled.span`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  span {
    padding: 2px;
    font-size: 13px;
  }
  svg {
    height: 18px;
    width: 18px;
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
  }
`;

export const StyledVirtualFilterItemWrapper = styled.div`
  width: auto;
  min-width: 150px;
  position: relative;
`;
