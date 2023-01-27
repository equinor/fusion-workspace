import { Suspense } from 'react';
import { Loading } from './loading';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { FusionEmbedConfig, FusionPowerBiToken } from '../types';
import { ErrorComponent } from './error/ErrorComponent';
import { PowerBiController } from '../classes';
import { IBasicFilter } from 'index';
import { Report } from './report/Report';

Icon.add({ chevron_down, chevron_up });

export interface PowerBiProps {
	reportUri: string;
	getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
	getEmbedInfo: (reportUri: string, token: string, signal?: AbortSignal) => Promise<FusionEmbedConfig>;
	filters?: IBasicFilter;
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
