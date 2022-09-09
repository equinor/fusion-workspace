import { Checkbox } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { VirtualItem } from 'react-virtual';
import styled from 'styled-components';
import { FilterValueType } from '../../types';
import { Count } from './filterItem.styles';

interface FilterItemCheckboxProps {
	filterValue: FilterValueType;
	handleFilterItemClick: () => void;
	handleFilterItemLabelClick: () => void;
	isChecked: boolean;
	ValueRender: () => JSX.Element;
	count?: number;
}

interface VirtualFilterItemCheckboxProps extends FilterItemCheckboxProps {
	virtualItem: VirtualItem;
}

export const VirtualFilterItemCheckbox = ({
	count,
	filterValue,
	handleFilterItemClick,
	isChecked,
	handleFilterItemLabelClick,
	ValueRender,
	virtualItem,
}: VirtualFilterItemCheckboxProps): JSX.Element => {
	return (
		<FilterItemWrap
			title={typeof filterValue === 'string' ? filterValue : '(Blank)'}
			style={{
				transform: `translateY(${virtualItem.start}px)`,
				height: `${virtualItem.size}px`,
				position: 'absolute',
				top: 0,
				left: 0,
			}}
			key={filterValue}
		>
			<Checkbox onChange={handleFilterItemClick} size={12} checked={!isChecked} />
			<FilterLabelWrapper onClick={handleFilterItemLabelClick}>
				<ValueRender />
			</FilterLabelWrapper>
			{typeof count === 'number' && <Count>({count})</Count>}
		</FilterItemWrap>
	);
};

const FilterLabelWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const FilterItemWrap = styled.div`
	grid-template-columns: auto 1fr auto;
	display: grid;
	align-items: center;
	padding-top: 2px;

	width: 100%;
	padding-bottom: 2px;
	> span {
		padding: 0px;

		> svg {
			width: 18px;
			height: 18px;
		}

		:first-child {
			padding-right: 2px;
		}
	}
	:hover {
		background-color: ${tokens.colors.interactive.primary__selected_hover.rgba};
	}
`;

export const FilterItemCheckbox = ({
	count,
	filterValue,
	handleFilterItemClick,
	isChecked,
	handleFilterItemLabelClick,
	ValueRender,
}: FilterItemCheckboxProps): JSX.Element => {
	return (
		<FilterItemWrap title={typeof filterValue === 'string' ? filterValue : '(Blank)'} key={filterValue}>
			<Checkbox onChange={handleFilterItemClick} size={12} checked={!isChecked} />
			<FilterLabelWrapper onClick={handleFilterItemLabelClick}>
				<ValueRender />
			</FilterLabelWrapper>
			{typeof count === 'number' && <Count>({count})</Count>}
		</FilterItemWrap>
	);
};
