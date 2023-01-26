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
import { PowerBiController } from 'lib/classes';
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

function generateRefetchInterval(data: FusionPowerBiToken | undefined) {
	if (!data) {
		return minutesToMs(2);
	}
	return new Date(data['expirationUtc']).getTime() - new Date().getTime();
}

export function Report({ getEmbedInfo, getToken, reportUri, controller }: PowerBiProps) {
	const {
		data: token,
		isLoading: tokenLoading,
		error,
	} = useQuery([reportUri, 'token'], ({ signal }) => getToken(reportUri, signal), {
		refetchInterval: generateRefetchInterval,
		suspense: true,
		useErrorBoundary: true,
	});

	const { data: embed, isLoading: embedLoading } = useQuery([reportUri, 'embed'], {
		queryFn: ({ signal }) => getEmbedInfo(reportUri, token!.token, signal),
		enabled: !tokenLoading,
		suspense: true,
		useErrorBoundary: true,
	});

	if (tokenLoading || embedLoading) return <Loading />;

	if (!embed || error) {
		return <>uh-oh</>;
	}

	return <LoadedReport config={embed} onReportReady={controller.reportReady} />;
}

const minutesToMs = (minutes: number) => minutes * 60 * 1000;
