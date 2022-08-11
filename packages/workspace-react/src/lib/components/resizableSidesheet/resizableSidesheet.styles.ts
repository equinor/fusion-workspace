import { tokens } from '@equinor/eds-tokens';
import { Resizable } from 're-resizable';
import styled from 'styled-components';

export const StyledResizable = styled(Resizable)`
	border-left: 2px solid ${tokens.colors.ui.background__medium.hex};
`;
