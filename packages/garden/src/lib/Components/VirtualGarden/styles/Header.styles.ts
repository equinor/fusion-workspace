import styled from 'styled-components';

export const HeaderRoot = styled.div`
    position: sticky;
    z-index: 1;
    top: 0;
`;

export const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 35px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid white;
`;
