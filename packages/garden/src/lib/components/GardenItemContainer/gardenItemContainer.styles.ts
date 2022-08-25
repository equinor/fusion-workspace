import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCount = styled.span`
	color: ${tokens.colors.text.static_icons__default.rgba};
	font-weight: 300;
	font-size: 0.8rem;
	margin-left: 0.8em;
	padding-bottom: 0.5rem;
`;

export const StyledPackageRoot = styled.div`
	position: absolute;
	will-change: transform;
	top: 0;
	left: 0;
`;
