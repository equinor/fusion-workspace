import { Search } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

import styled from 'styled-components';

export const EdsSearch = styled(Search)<{ hasValue: boolean }>`
	border: ${({ hasValue }) => (hasValue ? `1px solid ${tokens.colors.interactive.primary__resting.hex}` : 'none')};
`;
