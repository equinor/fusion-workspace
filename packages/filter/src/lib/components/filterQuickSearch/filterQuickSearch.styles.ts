import { Search, SearchProps } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

import styled from 'styled-components';

export const EdsSearch: (props: SearchProps & { hasValue: boolean }) => JSX.Element = styled(Search)<{
  hasValue: boolean;
}>`
  border: ${({ hasValue }) => (hasValue ? `1px solid ${tokens.colors.interactive.primary__resting.hex}` : 'none')};
  > div {
    box-shadow: none;
  }
`;
