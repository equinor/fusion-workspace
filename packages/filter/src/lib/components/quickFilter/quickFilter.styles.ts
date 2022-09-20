import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCompactFilterWrapper = styled.div`
	height: 50px;
	width: 100%;
	background-color: ${tokens.colors.ui.background__light.hex};
`;

export const StyledLeftSection = styled.div`
	display: flex;
	align-items: center;
	padding-left: 16px;
	gap: 0.5em;
`;

export const StyledRightSection = styled.div`
	display: flex;
	gap: 2em;
	align-items: center;
	padding-right: 2px;
`;

export const StyledSearchLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledWrapper = styled.div`
	width: 100%;
	overflow: scroll;
`;
