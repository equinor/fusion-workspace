import { Suspense, useRef } from 'react';
import { Loading } from './loading';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { FusionEmbedConfig, FusionPowerBiToken } from '../types';

import { PowerBiController } from '../classes';
import { Report } from './report/Report';

import React from 'react';
import { models, factories, service } from 'powerbi-client';
import styled from 'styled-components';
import { StyledLoadingWrapper } from './loading/loading.styles';

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
      <PowerBiBootstrap />
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

const StyledPowerBiBootstrap = styled.div`
  visbility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
`;

/**
 * Initializes preloading of iframe javascript resources
 */
function PowerBiBootstrap() {
  const isBootstrapped = useRef(false);

  return (
    <StyledPowerBiBootstrap
      id="pbi-bootstrap"
      ref={(ref) => {
        if (!ref || isBootstrapped.current == true) return;
        new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory).bootstrap(ref, {
          embedUrl: 'https://app.powerbi.com/reportEmbed',
          type: 'report',
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
          tokenType: 1,
        });
        isBootstrapped.current = true;
      }}
    />
  );
}
