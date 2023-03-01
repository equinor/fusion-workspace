import { Accordion, AccordionProps, Card, CardProps } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const StyledHeading = styled.h1`
  color: ${tokens.colors.text.static_icons__tertiary.rgba};
  margin-bottom: 0;
`;

export const StyledErrorWrapper = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow: auto;
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAccordionWrapper: (props: PropsWithChildren<AccordionProps>) => JSX.Element = styled(Accordion)`
  margin: 1rem;
  width: 40%;
`;

export const StyledRequirementsWrapper = styled.div`
  max-height: 500px;
  overflow: auto;
`;

export const StyledErrorCard: (props: CardProps) => JSX.Element = styled(Card)`
  margin-top: 2rem;
  width: 40%;
`;
