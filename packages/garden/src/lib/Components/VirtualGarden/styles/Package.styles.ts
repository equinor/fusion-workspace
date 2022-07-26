import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';
export const PackageRoot = styled.div`
    position: absolute;
    will-change: transform;
    top: 0;
    left: 0;
`;
export const DefaultPackage = styled.div<{ isSelected: boolean; depth: number; bgColor: string }>`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2em;
    background-color: ${({ bgColor }) => bgColor};
    width: ${({ depth }) => (depth > 0 ? `${100 - depth * 3}%` : '97%')};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding: 8px;
    border-radius: 4px;
    box-sizing: border-box;
    border: ${({ isSelected }) =>
        isSelected ? `2px dashed ${tokens.colors.interactive.primary__resting.hex}` : undefined};
`;
