import { Accordion, Card, Typography, Button, Divider } from '@equinor/eds-core-react';
import { PersonAvatar } from '@equinor/fusion-react-person';
import { tokens } from '@equinor/eds-tokens';
import { useQuery } from '@tanstack/react-query';
import Markdown from 'markdown-to-jsx';

import { Loading } from '../loading';
import { ReportAccessInfo } from '../../types';
import {
  StyledErrorContent,
  StyledErrorWrapper,
  StyledHeading,
  StyledReportDescriptionWrapper,
  StyledReportDetailsWrapper,
  StyledReportOwnerWrapper,
} from './reportErrorMessageStyles';

interface ReportErrorMessageProps {
  reportUri: string;
  getErrorMessage: (reportUri: string, signal?: AbortSignal) => Promise<string>;
  getAccessInfo: (reportUri: string, signal?: AbortSignal) => Promise<ReportAccessInfo>;
  title?: string;
  subtitle?: string;
}

export const ReportErrorMessage = (props: ReportErrorMessageProps) => {
  const {
    getErrorMessage,
    getAccessInfo,
    reportUri,
    title = 'Resctricted Access',
    subtitle = 'It looks like you do not have access to this report',
  } = props;

  const {
    data: errorMessage,
    isLoading: isLoadingErrorMessage,
    error: errorErrorMessage,
  } = useQuery([reportUri, 'get-report-error-message'], ({ signal }) => getErrorMessage(reportUri, signal), {
    useErrorBoundary: false,
    suspense: false,
  });

  const {
    data: accessInfo,
    isLoading: isLoadingAccessInfo,
    error: errorAccessInfo,
  } = useQuery([reportUri, 'get-report-access-info'], ({ signal }) => getAccessInfo(reportUri, signal), {
    useErrorBoundary: false,
    suspense: false,
  });

  if (isLoadingErrorMessage || isLoadingAccessInfo) {
    return <Loading />;
  }

  if (errorErrorMessage || errorAccessInfo || !accessInfo || !errorMessage) {
    return <div>Failed to load error message</div>;
  }

  return (
    <StyledErrorWrapper>
      <StyledErrorContent>
        <StyledHeading>{title}</StyledHeading>
        <Card elevation="raised">
          <Card.Header>
            <Card.HeaderTitle>
              <Typography variant="h3">{subtitle}</Typography>
              <Markdown>{accessInfo?.accessDescription}</Markdown>
            </Card.HeaderTitle>
            <Button variant="ghost_icon"></Button>
          </Card.Header>
          <Card.Content>
            <Divider style={{ width: '100%' }} />
            <StyledReportDetailsWrapper>
              <StyledReportDescriptionWrapper>
                <Typography variant="h5">Report description</Typography>
                <Markdown>{accessInfo.description}</Markdown>
              </StyledReportDescriptionWrapper>

              <StyledReportOwnerWrapper>
                <Typography variant="h5">Report owner</Typography>
                <Card.Header style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  <PersonAvatar azureId={accessInfo.ownedBy.azureUniqueId} />
                  <Card.HeaderTitle>
                    <Typography variant="body_short_bold">{accessInfo.ownedBy.mail}</Typography>
                    <Typography variant="body_short">{accessInfo.ownedBy.name}</Typography>
                  </Card.HeaderTitle>
                </Card.Header>
              </StyledReportOwnerWrapper>
            </StyledReportDetailsWrapper>
          </Card.Content>
        </Card>

        <br />

        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Access control description</Accordion.Header>
            <Accordion.Panel>
              <Markdown>{errorMessage}</Markdown>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </StyledErrorContent>
    </StyledErrorWrapper>
  );
};
