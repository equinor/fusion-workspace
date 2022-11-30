import { Checkbox } from '@equinor/eds-core-react';
import { useEffect, useState } from 'react';
import { useFilterContext, useFilterState } from '../../hooks';
import { FilterValueType } from '../../types';
import { StyledCount, StyledFilterItemWrap, StyledFilterLabelWrapper } from './filterItem.styles';

export interface FilterItemCheckboxProps {
	filterValue: FilterValueType;
	handleFilterItemClick: () => void;
	handleFilterItemLabelClick: () => void;
	groupName: string;
	ValueRender: () => JSX.Element;
	count?: number;
}

export const FilterItemCheckbox = ({
	count,
	filterValue,
	handleFilterItemClick,
	groupName,
	handleFilterItemLabelClick,
	ValueRender,
}: FilterItemCheckboxProps): JSX.Element => {
	const { currentFilterState$ } = useFilterContext();
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const sub = currentFilterState$.subscribe((s) =>
			setIsChecked(!s.find((s) => s.name === groupName)?.values.includes(filterValue))
		);
		return () => sub.unsubscribe();
	});

	return (
		<StyledFilterItemWrap title={typeof filterValue === 'string' ? filterValue : '(Blank)'} key={filterValue}>
			<Checkbox onChange={handleFilterItemClick} size={12} checked={isChecked} />
			<StyledFilterLabelWrapper onClick={handleFilterItemLabelClick}>
				<ValueRender />
			</StyledFilterLabelWrapper>
			{typeof count === 'number' && <StyledCount>({count})</StyledCount>}
		</StyledFilterItemWrap>
	);
};
