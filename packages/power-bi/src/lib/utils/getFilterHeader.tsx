import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';
export type FilterValueType = string | number | null;

export function getFilterHeaderText(
	isAllChecked: boolean,
	name: string,
	checkedValues: FilterValueType[]
): string | JSX.Element {
	if (isAllChecked || checkedValues.length === 0) return <NormalText>{name}</NormalText>;

	return (
		<div style={{ color: tokens.colors.interactive.primary__resting.hex }}>
			{checkedValues.length - 1 > 0
				? `${checkedValues[0] ?? '(Blank)'}(+${checkedValues.length - 1})`
				: `${checkedValues[0]}`}{' '}
		</div>
	);
}

const NormalText = styled.div`
	font-weight: 400;
`;
