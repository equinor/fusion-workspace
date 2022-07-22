import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    gap: 1em;
    overflow: hidden;
`;

export const LayoutRoot = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
`;
export const LayoutContainer = styled.div<{ width: number; height: number; isScrolling: boolean }>`
    position: relative;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    pointer-events: ${(props) => (props.isScrolling ? 'none' : 'auto')};
`;
