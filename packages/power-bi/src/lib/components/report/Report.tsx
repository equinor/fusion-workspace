import { useQuery } from '@tanstack/react-query';
import { IBasicFilter } from 'index';
import { FusionPowerBiToken, FusionEmbedConfig } from '../../types';

import { IReportEmbedConfiguration } from 'powerbi-client';
import { LoadedReport } from '../loadedReport/LoadedReport';
import { PowerBiProps } from '../PowerBi';

export function Report({ getEmbedInfo, getToken, reportUri, controller, filters }: PowerBiProps) {
	const { data: token, isLoading: tokenLoading } = useQuery({
		queryKey: [reportUri, 'token'],
		queryFn: ({ signal }) => getToken(reportUri, signal),
		refetchInterval: generateRefetchInterval,
		suspense: true,
		useErrorBoundary: true,
		refetchOnWindowFocus: true,
	});

	const { data: embed } = useQuery({
		queryKey: [reportUri, 'embed', ...(filters?.values ?? [])],
		queryFn: async ({ signal }) => {
			const { embedUrl, reportId } = await getEmbedInfo(reportUri, token!.token, signal);
			return generateEmbedConfig({ embedUrl, reportId }, token!.token, filters);
		},
		enabled: !tokenLoading,
		suspense: true,
		useErrorBoundary: true,
	});

	if (!embed) {
		throw new Error('No embed');
	}

	return (
		<LoadedReport
			config={embed}
			onReportReady={(rep) => {
				if (filters) {
					rep.setFilters([filters]);
				}
				controller.reportReady(rep);
			}}
		/>
	);
}

const minutesToMs = (minutes: number) => minutes * 60 * 1000;

const generateRefetchInterval = (data: FusionPowerBiToken | undefined) =>
	data ? new Date(data.expirationUtc).getTime() - new Date().getTime() : minutesToMs(2);

const generateEmbedConfig = (
	embedConfig: FusionEmbedConfig,
	token: string,
	filters?: IBasicFilter
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
