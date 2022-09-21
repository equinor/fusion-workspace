import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledVerticalLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${tokens.colors.ui.background__medium.hex};
`;

export const StyledSearchHolder = styled.div`
	padding-right: 0.5em;
	padding-left: 0.5em;
	padding-top: 0.8em;
	padding-bottom: calc(8px + 0.8em);
`;

export const StyledFilterItemList = styled.div<{ items: number }>`
	height: ${({ items }) => (items > 10 ? '300px' : `${items * 22 + 16}px`)};
	padding: 8px 8px;
`;

export const StyledClearButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-top: 8px;
	padding-right: 5px;
`;
