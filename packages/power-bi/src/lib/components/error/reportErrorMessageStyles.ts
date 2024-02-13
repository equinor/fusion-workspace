import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledHeading = styled.h1`
  color: ${tokens.colors.interactive.warning__resting.rgba};
`;

export const StyledErrorContent = styled.div`
  width: 50vw;
  min-width: 650px;
  max-width: 950px;
`;

export const StyledErrorWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 10px;
  height: 100%;
  width: 100%;
`;

export const StyledReportDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
`;

export const StyledReportDescriptionWrapper = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

export const StyledReportOwnerWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
`;
