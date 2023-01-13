import { SingleSelect, SingleSelectProps } from '@equinor/eds-core-react';
import styled from 'styled-components';

export const StyledSelectRowWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSeparator = styled.p`
	margin-right: 0.5em;
	margin-left: 0.5em;
`;

export const StyledSelectOneWrapper = styled.div`
	width: 250px;
`;

export const StyledSelect: (p: SingleSelectProps) => JSX.Element = styled(SingleSelect)`
	> div > button[title='clear'] {
		display: none;
	}
`;
