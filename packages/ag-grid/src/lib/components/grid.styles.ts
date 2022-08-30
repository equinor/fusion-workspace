import styled from 'styled-components';

export const StyledGridWrapper = styled.div<{ height: number; width: number }>`
	height: ${({ height }) => `${height}px`};
	width: ${({ width }) => `${width}px`};
`;
