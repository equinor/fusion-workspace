import styled from 'styled-components';

export const StyledGridWrapper = styled.div<{ height: number }>`
	height: ${({ height }) => `${height}px`};
	width: 100%;
`;
