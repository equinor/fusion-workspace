import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

type StyledDividerProps = {
  color?: string;
  width?: string | number;
};

const StyledDivider = styled.hr<StyledDividerProps>`
  width: ${({ width = '1px' }) => (typeof width === 'string' ? width : `${width}px`)};
  height: auto;
  align-self: stretch;
  background: ${({ color = tokens.colors.ui.background__medium.hex }) => color};
  border: none;
`;

/**
 * 1px vertical divider
 */
export const Divider = () => <StyledDivider />;
