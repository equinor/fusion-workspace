import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const FilterGroupWrapper = styled.div`
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

export const NormalText = styled.div`
    font-weight: 400;
`;

export const VerticalLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${tokens.colors.ui.background__medium.hex};
`;

export const SearchHolder = styled.div`
    padding-right: 0.5em;
    padding-left: 0.5em;
    padding-top: 0.8em;
    padding-bottom: calc(8px + 0.8em);
`;

export const MenuWrapper = styled.div`
    width: 200px;
`;

export const FilterItemList = styled.div<{ items: number }>`
    height: ${({ items }) => (items > 10 ? '300px' : `${items * 22 + 16}px`)};
    padding: 8px 8px;
`;

export const ClearButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 8px;
    padding-right: 5px;
`;
