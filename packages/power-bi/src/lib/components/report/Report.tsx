import { useSuspenseQuery } from '@tanstack/react-query';
import { FusionPowerBiToken, FusionEmbedConfig } from '../../types';

import { IReportEmbedConfiguration, models } from 'powerbi-client';
import { LoadedReport } from '../loadedReport/LoadedReport';
import { PowerBiProps } from '../PowerBi';

export function Report({ getEmbedInfo, getToken, reportUri, controller, filters, bookmark }: PowerBiProps) {
  const { data: token } = useSuspenseQuery<FusionPowerBiToken>({
    queryKey: [reportUri, 'token'],
    queryFn: ({ signal }) => getToken(reportUri, signal),
    refetchInterval: (query) => generateRefetchInterval(query.state.data),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { data: embed } = useSuspenseQuery({
    queryKey: [reportUri, 'embed'],
    queryFn: async ({ signal }) => {
      const { embedUrl, reportId } = await getEmbedInfo(reportUri, token!.token, signal);
      return generateEmbedConfig({ embedUrl, reportId }, token!.token, filters);
    },
  });

  if (!embed) {
    throw new Error('No embed');
  }

  return (
    <LoadedReport
      config={embed}
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
