import { Suspense } from 'react';
import { Loading } from './loading';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { FusionEmbedConfig, FusionPowerBiToken, ReportAccessInfo } from '../types';
import { ErrorComponent } from './error/ErrorComponent';
import { PowerBiController } from '../classes';
import { IBasicFilter } from 'index';
import { Report } from './report/Report';

Icon.add({ chevron_down, chevron_up });

export interface PowerBiProps {
  reportUri: string;
  getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
  getEmbedInfo: (reportUri: string, token: string, signal?: AbortSignal) => Promise<FusionEmbedConfig>;
  getErrorMessage: (reportUri: string) => Promise<string>;
  getAccessInfo: (reportUri: string) => Promise<ReportAccessInfo>;
  filters?: IBasicFilter;
  bookmark?: string;
  controller: PowerBiController;
}

const client = new QueryClient();

export const PowerBi = (props: PowerBiProps) => {
  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<Loading />}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={(e) => (
                <ErrorComponent
                  {...e}
                  getAccessInfo={props.getAccessInfo}
                  getErrorMessage={props.getErrorMessage}
                  reportUri={props.reportUri}
                />
              )}
            >
              <Report {...props} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    </QueryClientProvider>
  );
};
