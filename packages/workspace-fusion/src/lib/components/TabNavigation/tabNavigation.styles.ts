import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const TabButton = styled.button<{ isActive: boolean }>`
  height: 48px;
  width: 48px;
  border: none;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & path {
    fill: ${({ isActive }) => isActive && `${tokens.colors.interactive.primary__resting.hex}`};
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 1px;
    right: 0;
    left: 0;
    height: 2px;
    background-color: ${({ isActive }) => isActive && `${tokens.colors.interactive.primary__resting.hex}`};
  }
`;

export const TabButtonList = styled.div`
  height: 100%;
  display: flex;
  padding-right: 0.5rem;
`;
