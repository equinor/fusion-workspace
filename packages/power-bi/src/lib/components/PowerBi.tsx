import { Suspense } from 'react';
import { Loading } from './loading';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { FusionEmbedConfig, FusionPowerBiToken } from '../types';

import { PowerBiController } from '../classes';
import { Report } from './report/Report';

import React from 'react';
import { models } from 'powerbi-client';

Icon.add({ chevron_down, chevron_up });

export type ErrorComponentProps = {
  reportUri: string;
} & FallbackProps;

export interface PowerBiProps {
  reportUri: string;
  getToken: (reportUri: string, signal?: AbortSignal) => Promise<FusionPowerBiToken>;
  getEmbedInfo: (reportUri: string, token: string, signal?: AbortSignal) => Promise<FusionEmbedConfig>;
  ErrorComponent: React.ComponentType<ErrorComponentProps>;
  filters?: models.IBasicFilter;
  bookmark?: string;
  controller: PowerBiController;
}

const client = new QueryClient();

export const PowerBi = (props: PowerBiProps) => {
  const { reportUri, ErrorComponent } = props;
  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<Loading />}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              FallbackComponent={(errorProps) => <ErrorComponent {...errorProps} reportUri={reportUri} />}
            >
              <Report {...props} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    </QueryClientProvider>
  );
};
