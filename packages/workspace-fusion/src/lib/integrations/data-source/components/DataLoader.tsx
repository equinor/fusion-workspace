import { Button } from '@equinor/eds-core-react';
import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQuery } from 'react-query';
import styled from 'styled-components';
import { useQueryContext } from '../context';

function Query({ children }: PropsWithChildren) {
	const query = useQueryContext();
	useQuery(query);

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
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
			<div>Failed to load data!</div>
			<Button variant="outlined" onClick={() => resetErrorBoundary()}>
				Retry
			</Button>
			<pre>{JSON.stringify(error)}</pre>
		</div>
	</StyledCentering>
);

const StyledCentering = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;
