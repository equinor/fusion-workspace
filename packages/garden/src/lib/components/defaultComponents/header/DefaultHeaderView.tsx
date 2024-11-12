import { CustomHeaderView } from '../../../types';
import { memo } from 'react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
import { Typography } from '@equinor/eds-core-react';

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledCount = styled(Typography).withConfig({ displayName: 'cc-apps-' })`
  color: ${tokens.colors.text.static_icons__default.hex};
  margin-left: 0.8em;
  font-weight: 300;
  color: inherit;
`;

const StyledHeaderText = styled(Typography).withConfig({ displayName: 'cc-apps-' })`
  white-space: pre-line;
  font-weight: 500;
  color: inherit;
`;

const HeaderView = (props: CustomHeaderView) => {
  const { header } = props;

  return (
    <StyledHeaderContent>
      <StyledHeaderText variant="h6">{header.name}</StyledHeaderText>
      <StyledCount group="navigation" variant="label">
        ({header.count})
      </StyledCount>
    </StyledHeaderContent>
  );
};

export const DefaultHeaderView = memo(HeaderView);
