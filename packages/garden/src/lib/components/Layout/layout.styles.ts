import styled from 'styled-components';

export const StyledLayoutRoot = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;
export const StyledLayoutContainer = styled.div<{ width: number; height: number; isScrolling: boolean }>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  pointer-events: ${(props) => (props.isScrolling ? 'none' : 'auto')};
`;
