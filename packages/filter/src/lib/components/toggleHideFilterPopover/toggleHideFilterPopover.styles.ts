import styled from 'styled-components';

export const StyledPopoverList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 20px;
`;

export const StyledItemWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;

	align-items: center;
	width: 100%;
	height: 32px;
	min-width: 200px;
`;

export const StyledButton = styled.button`
	background: none;
	border: none;
	height: 48px;
	width: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
