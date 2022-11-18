import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

import { StyledSubGroup, StyledSubGroupText, StyledCount } from './subGroup.styles';
import { memo } from 'react';
import { CustomGroupView } from '../../../types';
import { isSubGroup } from '../../..//utils';

const GardenGroupView = <TData extends Record<PropertyKey, unknown>>({
	data,
	onClick,
	onGroupeSelect,
}: CustomGroupView<TData>) => {
	const width = isSubGroup(data) ? 100 - data.depth * 3 : 100;

	return (
		<StyledSubGroup onClick={onClick} style={{ width: `${width}%` }}>
			<StyledSubGroupText>
				<div onClick={() => onGroupeSelect && onGroupeSelect(data)}>{data.value}</div>
				{data.description && ' - ' + data.description}
				<StyledCount>({data.count})</StyledCount>
			</StyledSubGroupText>
			<Icon
				name={data.isExpanded ? 'chevron_up' : 'chevron_down'}
				color={tokens.colors.interactive.primary__resting.hex}
			/>
		</StyledSubGroup>
	);
};

export const DefaultGroupView = memo(GardenGroupView);
