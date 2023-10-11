import styled from 'styled-components';

type StyledViewSettingsProps = {
  expanded: boolean;
};

export const StyledViewSettings = styled.div<StyledViewSettingsProps>`
  width: ${(props) => (props.expanded ? '300px' : '45px')};
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  padding: 10px;
  transition: width 0.1s ease;
  overflow: hidden;
`;
export const VerticalText = styled.div`
  transform: rotate(90deg);
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
  font-size: 16px;
`;
