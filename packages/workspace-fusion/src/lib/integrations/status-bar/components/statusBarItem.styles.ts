import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const Value = styled.div`
  color: ${tokens.colors.text.static_icons__default.hex};
  font-size: 20px;
  line-height: 24px;
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
`;

export const Group = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${tokens.colors.text.static_icons__tertiary.hex};
`;

export const Title = styled.div`
  color: ${tokens.colors.text.static_icons__tertiary.hex};
  font-size: 12px;
  line-height: 16px;
`;

export const StatusCard = styled.div`
  min-height: 40;
  min-width: 70;
  width: fit-content;
`;
