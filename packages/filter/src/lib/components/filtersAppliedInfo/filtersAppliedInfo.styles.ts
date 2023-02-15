import { Chip, ChipProps } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const InfoChip: (props: ChipProps) => JSX.Element = styled(Chip)`
  background-color: ${tokens.colors.ui.background__info.hex};
  color: ${tokens.colors.text.static_icons__default.hex};
  font-weight: 500;
  font-size: 12px;
`;
