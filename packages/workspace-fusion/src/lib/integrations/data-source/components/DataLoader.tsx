import { WorkspaceError } from '../../../components/error/ErrorComponent';
import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import { useQueryContext } from '../context';

/**
 * The filterprovider fetches the actual data
 * But we want the tab to show the loading/error state
 * I wrap the tab in suspense and error boundary then I hook into the api call being made to read loading/error state
 */
function Query({ children }: PropsWithChildren) {
  useQuery(useQueryContext());
  return <>{children}</>;
}

export const DataLoader = ({ children }: PropsWithChildren) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={ErrorComponent}>
          <Query>{children}</Query>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <WorkspaceError title={'Uh-oh'} type={'Error'} error={error} />
);
