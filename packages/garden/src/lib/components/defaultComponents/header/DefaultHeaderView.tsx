import { CustomHeaderView } from '../../../types';
import { memo } from 'react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

const Count = styled.span`
	color: ${tokens.colors.text.static_icons__default.hex};
	font-weight: 300;
	font-size: 0.8rem;
	margin-left: 0.8em;
`;

const HeaderView = ({ garden, columnIndex }: CustomHeaderView<Record<PropertyKey, unknown>>) => {
	return (
		<>
			{garden[columnIndex].value}
			<Count>({garden[columnIndex].count})</Count>
		</>
	);
};

export const DefaultHeaderView = memo(HeaderView);
