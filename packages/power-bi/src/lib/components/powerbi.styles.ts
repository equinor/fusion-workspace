import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledReportRoot = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${tokens.colors.ui.background__light.hex};
`;

export const StyledReportContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;
