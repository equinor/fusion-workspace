import { FusionMediator, FusionWorkspaceError } from 'lib/types';
import { PropsWithChildren, useState, useEffect } from 'react';
import styled from 'styled-components';

export const DataErrorWrapper = ({
	children,
	mediator,
}: PropsWithChildren<{ mediator: FusionMediator<any, any, any> }>) => {
	const [error, setError] = useState<null | FusionWorkspaceError>(null);

	useEffect(() => {
		const sub = mediator.errorService.error$.subscribe(setError);
		return () => sub.unsubscribe();
	}, [mediator]);

	if (error) {
		return (
			<StyledErrorMessage>
				<div>{error.code}</div>
			</StyledErrorMessage>
		);
	}

	return <>{children}</>;
};

const StyledErrorMessage = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
