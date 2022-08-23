import styled from 'styled-components';

export const StyledLeftHeader = styled.div`
	display: flex;
	gap: 0.5em;
	flex-direction: row;
	align-items: center;
	width: 80%;
`;

export const StyledRightHeader = styled.div`
	display: flex;
	flex-direction: row;
	width: fit-content;
`;

export const StyledTitle = styled.div`
	font-size: 24px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 76px;
	align-items: center;
`;

export const StyledColourTab = styled.div<{ appColor: string }>`
	display: flex;
	align-items: center;
	background-color: ${({ appColor }) => appColor};
	height: 76px;
	width: 24px;
`;

export const StyledRotatedText = styled.span`
	display: inline-block;
	transform: rotate(90deg);
	transform-origin: left;
	margin-left: 10px;
	white-space: nowrap;
	font-size: 14px;
`;
