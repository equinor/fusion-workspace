import { Button } from '@equinor/eds-core-react';
import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQuery } from 'react-query';
import styled from 'styled-components';
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
	<StyledCentering>
		<ContentWrapper>
			<div>Failed to load data!</div>
			<Button variant="outlined" onClick={() => resetErrorBoundary()}>
				Retry
			</Button>
			<pre>{JSON.stringify(error, undefined, 4)}</pre>
		</ContentWrapper>
	</StyledCentering>
);

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const StyledCentering = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;
