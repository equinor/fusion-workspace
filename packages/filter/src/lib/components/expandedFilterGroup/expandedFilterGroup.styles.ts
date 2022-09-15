import { Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledTitle = styled.h4<{ hasFilters: boolean }>`
	margin: 0.2rem;
	white-space: nowrap;
	font-size: 14px;
	font-weight: ${({ hasFilters }) => (hasFilters ? '700' : '400')};
`;

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem 0.5rem 0rem 1rem;
	width: fit-content;
	max-width: 500px;
	text-overflow: ellipsis;
	word-wrap: break-word;
	height: 180px;

	#search {
		visibility: hidden;
	}

	&:hover #search {
		visibility: visible;
	}

	label {
		padding: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		span {
			padding: 0rem;
		}
		svg {
			height: 18px;
			width: 18px;
		}
	}
`;
export const StyledVirtualFilterContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: auto;
	::-webkit-scrollbar {
		height: 0.1rem;
		width: 0.3rem;
	}
`;

export const StyledVirtualFilterItemWrapper = styled.div`
	width: auto;
	min-width: 150px;
	position: relative;
`;

export const StyledFilterHeaderGroup = styled.div<{ isActive: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	min-height: 50px;
	box-sizing: border-box;
	border-bottom: ${({ isActive }) =>
		`2px solid ${
			isActive ? tokens.colors.interactive.primary__resting.hex : tokens.colors.ui.background__medium.hex
		}`};

	color: ${({ isActive }) =>
		isActive ? tokens.colors.interactive.primary__resting.hex : tokens.colors.text.static_icons__default.hex};

	margin-bottom: 5px;
`;

export const StyledSearchButton = styled(Button)`
	width: 36px;
	height: 36px;
`;
