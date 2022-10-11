import { useObservable } from '../../hooks/useObservable';
import { useSidesheet } from '../provider/sidesheetControllerProvider';

import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';
import { Icon } from '@equinor/eds-core-react';

export function ErrorBanner() {
	const { error$, throwError } = useSidesheet();
	const error = useObservable(error$);

	if (!error) return null;

	return (
		<div>
			<ErrorContainer>
				<Inline>
					<div>{error.title}</div>
					<Icon name="close" onClick={() => throwError(null)} />
				</Inline>
				<ErrorDetails>{error.description}</ErrorDetails>
			</ErrorContainer>
		</div>
	);
}

export const Inline = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ErrorDetails = styled.div`
	flex-direction: column;
	gap: 0.5em;
	display: flex;
	text-align: left;
	width: 100%;
`;

export const ErrorContainer = styled.div`
	min-width: 250px;
	min-height: 15px;
	width: -webkit-fill-available;
	height: auto;
	border-radius: 5px;
	background-color: ${tokens.colors.ui.background__danger.hex};
	display: flex;
	align-items: center;
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	gap: 0.7em;
`;
