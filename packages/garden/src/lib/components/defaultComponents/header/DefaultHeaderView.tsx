import { CustomHeaderView } from '../../../types';
import { memo } from 'react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const StyledCount = styled.h2`
  color: ${tokens.colors.text.static_icons__default.hex};
  font-weight: 300;
  font-size: 0.8rem;
  margin-left: 0.8em;
`;

const StyledHeaderText = styled.h2`
  white-space: pre-line;
  font-size: 16px;
  text-align: center;
`;

const HeaderView = (props: CustomHeaderView) => {
  const { header } = props;

  return (
    <StyledHeaderContent>
      <StyledHeaderText>{header.name}</StyledHeaderText>
      <StyledCount>({header.count})</StyledCount>
    </StyledHeaderContent>
  );
};

export const DefaultHeaderView = memo(HeaderView);
