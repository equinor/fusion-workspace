import { useQuery } from '@tanstack/react-query';
import { FusionPowerBiToken, FusionEmbedConfig } from '../../types';

import { IReportEmbedConfiguration, models } from 'powerbi-client';
import { LoadedReport } from '../loadedReport/LoadedReport';
import { PowerBiProps } from '../PowerBi';
import { CircularProgress } from '@equinor/eds-core-react';
import styled from 'styled-components';

const StyledLoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export function Report({ getEmbedInfo, getToken, reportUri, controller, filters, bookmark }: PowerBiProps) {
  const { data: token, isLoading: isTokenLoading } = useQuery<FusionPowerBiToken>({
    queryKey: [reportUri, 'token'],
    queryFn: ({ signal }) => getToken(reportUri, signal),
    refetchInterval: (query) => generateRefetchInterval(query.state.data),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { data: embed, isLoading: isEmbedLoading } = useQuery({
    queryKey: [reportUri, 'embed'],
    queryFn: async ({ signal }) => {
      const { embedUrl, reportId } = await getEmbedInfo(reportUri, '', signal);
      return {
        embedUrl,
        reportId,
      };
    },
  });

  if (isTokenLoading || isEmbedLoading) {
    return (
      <StyledLoadingWrapper>
        <CircularProgress size={48} />
      </StyledLoadingWrapper>
    );
  }

  if (!embed) {
    throw new Error('No embed');
  }

  if (!token) {
    throw new Error('No token');
  }

  return (
    <LoadedReport
      config={generateEmbedConfig(embed, token.token, filters)}
      onReportReady={(rep) => {
        if (bookmark) {
          rep.bookmarksManager.applyState(bookmark);
        } else if (filters) {
          rep.setFilters([filters]);
        }
        controller.reportReady(rep);
      }}
    />
  );
}

const minutesToMs = (minutes: number) => minutes * 60 * 1000;

const generateRefetchInterval = (data: FusionPowerBiToken | undefined): number =>
  data ? new Date(data.expirationUtc).getTime() - new Date().getTime() : minutesToMs(2);

const generateEmbedConfig = (
  embedConfig: FusionEmbedConfig,
  token: string,
  filters?: models.IBasicFilter
): IReportEmbedConfiguration => ({
  ...defaultEmbedConfiguration,
  accessToken: token,
  embedUrl: embedConfig.embedUrl,
  id: embedConfig.reportId,
  filters: filters ? [filters] : undefined,
});

const defaultEmbedConfiguration: IReportEmbedConfiguration = {
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: false,
      },
      pageNavigation: {
        visible: false,
      },
    },
  },
  type: 'report',
  tokenType: 1,
};
