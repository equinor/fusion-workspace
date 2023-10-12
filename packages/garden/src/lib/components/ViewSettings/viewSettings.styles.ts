import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

type StyledViewSettingsProps = {
  expanded: boolean;
};

export const StyledViewSettings = styled.div<StyledViewSettingsProps>`
  width: ${(props) => (props.expanded ? '260px' : '45px')};
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  margin-left: 2px;
  padding: 10px;
  transition: width 0.1s ease;
  overflow: hidden;
  background-color: ${(props) =>
    props.expanded ? tokens.colors.ui.background__light.rgba : tokens.colors.ui.background__light.rgba};
`;
