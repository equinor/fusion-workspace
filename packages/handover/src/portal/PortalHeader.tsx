import React from 'react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

export const PortalHeader = () => {
	return (
		<StyledHeader>
			<StyledPortalTitle>Johan Castberg</StyledPortalTitle>
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	height: 48px;
	width: 100vw;
	display: flex;
	padding: 0 1em;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid ${tokens.colors.ui.background__medium.hex};
`;

const StyledPortalTitle = styled.div`
	font-family: Equinor;
	font-size: 16px;
	line-height: 0px;
	font-weight: 500;
	letter-spacing: 0.2px;
	margin: 0px;
	color: '#3D3D3D';
`;
