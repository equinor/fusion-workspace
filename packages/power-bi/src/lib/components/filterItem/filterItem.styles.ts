import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const StyledCheckboxItem = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	> label {
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
	}
	:hover {
		background-color: ${tokens.colors.interactive.primary__selected_hover.rgba};
	}
`;
