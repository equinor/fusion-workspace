import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const CompactFilterWrapper = styled.div`
	height: 50px;
	width: 100%;
	background-color: ${tokens.colors.ui.background__light.hex};
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	padding-left: 16px;
	gap: 0.5em;
`;

export const RightSection = styled.div`
	display: flex;
	gap: 2em;
	align-items: center;
	padding-right: 2px;
`;

export const SearchLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const VerticalDivider = styled.div`
	border-left: ${tokens.colors.ui.background__medium.hex} 2px solid;
	height: 50px;
	width: 2px;
`;
