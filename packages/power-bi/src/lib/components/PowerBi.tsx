import { Suspense } from 'react';
import { IReportEmbedConfiguration } from 'powerbi-client';
import { Loading } from './loading';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { FusionPowerBiToken } from '../types';
import { LoadedReport } from './loadedReport/LoadedReport';
import { ErrorComponent } from './error/ErrorComponent';
import { PowerBiController } from '../classes';
Icon.add({ chevron_down, chevron_up });

export interface PowerBiProps {
	reportUri: string;
	getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
	getEmbedInfo: (reportUri: string, token: string, signal?: AbortSignal) => Promise<IReportEmbedConfiguration>;
	controller: PowerBiController;
}

export const PowerBi = (props: PowerBiProps) => {
	return (
		<Suspense fallback={<Loading />}>
			<QueryErrorResetBoundary>
				{({ reset }) => (
					<ErrorBoundary onReset={reset} fallbackRender={ErrorComponent}>
						<Report {...props} />
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		</Suspense>
	);
};

export function Report({ getEmbedInfo, getToken, reportUri, controller }: PowerBiProps) {
	const { data: token, isLoading: tokenLoading } = useQuery({
		queryKey: [reportUri, 'token'],
		queryFn: ({ signal }) => getToken(reportUri, signal),
		refetchInterval: generateRefetchInterval,
		suspense: true,
		useErrorBoundary: true,
		refetchOnWindowFocus: true,
	});

	const { data: embed } = useQuery({
		queryKey: [reportUri, 'embed'],
		queryFn: ({ signal }) => getEmbedInfo(reportUri, token!.token, signal),
		enabled: !tokenLoading,
		suspense: true,
		useErrorBoundary: true,
		refetchOnWindowFocus: true,
	});

	if (!embed) {
		throw new Error('No embed');
	}

	return <LoadedReport config={embed} onReportReady={controller.reportReady} />;
}

const minutesToMs = (minutes: number) => minutes * 60 * 1000;

const generateRefetchInterval = (data: FusionPowerBiToken | undefined) =>
	data ? new Date(data.expirationUtc).getTime() - new Date().getTime() : minutesToMs(2);
