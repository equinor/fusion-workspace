import { Typography, TypographyProps } from '@equinor/eds-core-react';
import styled from 'styled-components';

export const StyledTitleBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: -webkit-fill-available;
`;
export const StyledTitle: (props: TypographyProps) => JSX.Element = styled(Typography)`
	padding: 10px 32px;
`;
